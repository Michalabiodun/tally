# LoadTally - Fleet Management Dashboard

A comprehensive fleet management dashboard built with React, TypeScript, D3.js, and Supabase.

## Features

- **Revenue Metrics**: Track revenue, material costs, contractor payments, and progress to targets with circular progress indicators
- **Financial Overview**: Visualize revenue, COGS, and net profit with interactive D3.js charts
- **Active Dispatch**: Monitor latest dispatches with assigned status
- **Active Jobs**: View and manage currently active work orders
- **Maintenance Schedule**: Track vehicle maintenance status and upcoming schedules
- **Completed Maintenance**: Historical maintenance records with filtering capabilities

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase project URL and anon key

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Database Setup

The application uses Supabase for data persistence. The database schema includes:

- `clients` - Client information
- `drivers` - Driver details
- `revenue_metrics` - Revenue tracking data
- `financial_data` - Financial metrics over time
- `jobs` - Work orders and job assignments
- `dispatches` - Dispatch records
- `vehicles` - Fleet vehicle information
- `maintenance_records` - Vehicle maintenance history

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **D3.js** - Data visualization
- **Supabase** - Backend and database
- **Vite** - Build tool
- **Lucide React** - Icons

## License

MIT
