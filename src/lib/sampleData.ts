import { supabase } from './supabase';

export async function initializeSampleData() {
  const clientId = crypto.randomUUID();
  const driverId = crypto.randomUUID();
  const vehicleId = crypto.randomUUID();

  await supabase.from('clients').insert([
    { id: clientId, name: 'Fred Smith Company', contact_info: 'contact@fredsmith.com' }
  ]);

  await supabase.from('drivers').insert([
    { id: driverId, name: 'Fred Smith Company', email: 'driver@fredsmith.com', phone: '555-0100' }
  ]);

  await supabase.from('revenue_metrics').insert([
    { metric_type: 'revenue_to_date', label: 'Stamped CD', amount: 2323875.23, period: 'December 2025', progress_percentage: 68 },
    { metric_type: 'material_cost', label: 'December 2025', amount: 2323875.23, period: 'December 2025', progress_percentage: 68 },
    { metric_type: 'contractor_payable', label: 'Caleb Thomas', amount: 2323875.23, period: 'December 2025', progress_percentage: 68 },
    { metric_type: 'progress_target', label: '$1,297.382/day avg', amount: 2323875.23, period: 'December 2025', progress_percentage: 68 }
  ]);

  await supabase.from('financial_data').insert([
    { date: '2025-12-01', total_revenue: 4000, total_cogs: 4000, gross_profit: 0, product_2: 2400, net_profit: 3000 },
    { date: '2025-12-02', total_revenue: 3000, total_cogs: 3000, gross_profit: 0, product_2: 1398, net_profit: 5000 },
    { date: '2025-12-03', total_revenue: 2000, total_cogs: 2000, gross_profit: 0, product_2: 6800, net_profit: 2000 },
    { date: '2025-12-04', total_revenue: 6000, total_cogs: 6000, gross_profit: 0, product_2: 3908, net_profit: 6500 },
    { date: '2025-12-05', total_revenue: 4500, total_cogs: 4500, gross_profit: 0, product_2: 4800, net_profit: 5000 }
  ]);

  await supabase.from('jobs').insert([
    { job_name: 'DISPATCH-1032', client_id: clientId, driver_id: driverId, start_time: '2025-12-08T10:00:00', job_type: 'Tonnage', status: 'Assigned' },
    { job_name: 'DISPATCH-1032', client_id: clientId, driver_id: driverId, start_time: '2025-12-08T11:00:00', job_type: 'Tonnage', status: 'Assigned' },
    { job_name: 'DISPATCH-1032', client_id: clientId, driver_id: driverId, start_time: '2025-12-08T12:00:00', job_type: 'Tonnage', status: 'Assigned' },
    { job_name: 'DISPATCH-1032', client_id: clientId, driver_id: driverId, start_time: '2025-12-08T13:00:00', job_type: 'Tonnage', status: 'Assigned' }
  ]);

  await supabase.from('dispatches').insert([
    { job_number: 'JOB-2025-1123-188', client_id: clientId, equipment: 'Wade Moore Equip.', truck: 'N/A', loads: 0, tons: 0 },
    { job_number: 'JOB-2025-1123-188', client_id: clientId, equipment: 'Wade Moore Equip.', truck: 'N/A', loads: 0, tons: 0 },
    { job_number: 'JOB-2025-1123-188', client_id: clientId, equipment: 'Wade Moore Equip.', truck: 'N/A', loads: 0, tons: 0 }
  ]);

  await supabase.from('vehicles').insert([
    { id: vehicleId, vehicle_number: '1701', make_model: 'Freightliner Cascadia', year: 2020 }
  ]);

  await supabase.from('maintenance_records').insert([
    { vehicle_id: vehicleId, service_type: 'Oil Change - Oil change', technician: 'Jonathan', details: '155,567 mi', service_date: '2025-11-02', mileage: 155567, status: 'completed' },
    { vehicle_id: vehicleId, service_type: 'Oil Change - Oil change', technician: 'Jonathan', details: '4 Tires across the back axles', service_date: '2025-11-02', mileage: 155567, status: 'completed' },
    { vehicle_id: vehicleId, service_type: 'Oil Change - Oil change', technician: 'Jonathan', details: '155,567 mi', service_date: '2025-11-02', mileage: 155567, status: 'completed' }
  ]);

  return true;
}
