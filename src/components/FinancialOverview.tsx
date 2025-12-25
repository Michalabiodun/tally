
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { RefreshCw, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DataPoint {
  date: string;
  cogs: number;
  product2: number;
  netProfit: number;
}

const data: DataPoint[] = [
  { date: 'Dec 1', cogs: 4000, product2: 2400, netProfit: 3000 },
  { date: 'Dec 2', cogs: 3000, product2: 1398, netProfit: 5000 },
  { date: 'Dec 3', cogs: 2000, product2: 6800, netProfit: 2000 },
  { date: 'Dec 4', cogs: 6000, product2: 3908, netProfit: 6500 },
  { date: 'Dec 5', cogs: 4500, product2: 4800, netProfit: 5000 }
];

function LineChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3.scalePoint()
      .domain(data.map(d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 8000])
      .range([height, 0]);

    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('fill', '#6b7280');

    g.append('g')
      // .call(d3.axisLeft(y).tickFormat(d => `$${ d / 1000 } k`).ticks(5))
      .call(d3.axisLeft(y).tickFormat(d => `$${d3.format("~s")(d)} `).ticks(5))
      .selectAll('text')
      .style('fill', '#6b7280');

    g.selectAll('.domain, .tick line')
      .style('stroke', '#e5e7eb');

    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(y).tickSize(-width).tickFormat(() => '').ticks(5))
      .selectAll('.tick line')
      .style('stroke', '#f3f4f6')
      .style('stroke-dasharray', '3,3');

    g.selectAll('.domain').style('stroke', 'none');

    const lineGeneratorCogs = d3.line<DataPoint>()
      .x(d => x(d.date)!)
      .y(d => y(d.cogs))
      .curve(d3.curveCardinal);

    const lineGeneratorProduct2 = d3.line<DataPoint>()
      .x(d => x(d.date)!)
      .y(d => y(d.product2))
      .curve(d3.curveCardinal);

    const lineGeneratorNetProfit = d3.line<DataPoint>()
      .x(d => x(d.date)!)
      .y(d => y(d.netProfit))
      .curve(d3.curveCardinal);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#ef4444')
      .attr('stroke-width', 2.5)
      .attr('d', lineGeneratorCogs);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#10b981')
      .attr('stroke-width', 2.5)
      .attr('d', lineGeneratorProduct2);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#1e40af')
      .attr('stroke-width', 2.5)
      .attr('d', lineGeneratorNetProfit);

    data.forEach(d => {
      g.append('circle')
        .attr('cx', x(d.date)!)
        .attr('cy', y(d.cogs))
        .attr('r', 4)
        .attr('fill', '#ef4444');

      g.append('circle')
        .attr('cx', x(d.date)!)
        .attr('cy', y(d.product2))
        .attr('r', 4)
        .attr('fill', '#10b981');

      g.append('circle')
        .attr('cx', x(d.date)!)
        .attr('cy', y(d.netProfit))
        .attr('r', 4)
        .attr('fill', '#1e40af');
    });

    const legend = g.append('g')
      .attr('transform', `translate(${width / 2 - 150}, ${height + 30})`);

    const legendItems = [
      { name: 'COGS', color: '#ef4444' },
      { name: 'Product 2', color: '#10b981' },
      { name: 'Net Profit', color: '#1e40af' }
    ];

    legendItems.forEach((item, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(${i * 120}, 0)`);

      legendItem.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 4)
        .attr('fill', item.color);

      legendItem.append('text')
        .attr('x', 10)
        .attr('y', 4)
        .text(item.name)
        .style('font-size', '8px')
        .style('fill', '#6b7280');
    });
  }, []);

  return <svg ref={svgRef} width={700} height={300} />;
}

export default function FinancialOverview() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
            <BarChart3 className="text-indigo-600" size={20} />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900 mb-1">{t('financial.title')}</h2>
            <p className="text-xs text-gray-500">{t('financial.subtitle')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-xs">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-xs">
            <option>All Clients</option>
            <option>Client 1</option>
            <option>Client 2</option>
          </select>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
          <div className="text-xs font-medium text-green-800 mb-2">{t('financial.total_revenue')}</div>
          <div className="text-lg font-bold text-green-900 mb-1">$4,666.45</div>
          <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
            <TrendingUp size={14} />
            <span>{t('financial.from_last_period', { percent: 8.2 })}</span>
          </div>
        </div>

        <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
          <div className="text-xs font-medium text-rose-800 mb-2">{t('financial.total_cogs')}</div>
          <div className="text-lg font-bold text-rose-900 mb-1">$4,666.45</div>
          <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
            <TrendingDown size={14} />
            <span>{t('financial.from_last_period', { percent: 8.2 })}</span>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="text-xs font-medium text-blue-800 mb-2">{t('financial.gross_profit')}</div>
          <div className="text-lg font-bold text-blue-900 mb-1">$4,666.45</div>
          <div className="flex items-center gap-1 text-xs text-blue-700 font-medium">
            <TrendingUp size={14} />
            <span>{t('financial.from_last_period', { percent: 8.2 })}</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
