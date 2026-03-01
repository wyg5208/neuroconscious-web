"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface FreeEnergyData {
  step: number;
  freeEnergy: number;
}

interface FreeEnergyChartProps {
  data?: FreeEnergyData[];
  title?: string;
}

export default function FreeEnergyChart({ 
  data = [
    { step: 0, freeEnergy: 100 },
    { step: 100, freeEnergy: 85.3 },
    { step: 200, freeEnergy: 72.1 },
    { step: 300, freeEnergy: 61.8 },
    { step: 400, freeEnergy: 53.2 },
    { step: 500, freeEnergy: 46.5 },
    { step: 600, freeEnergy: 41.2 },
    { step: 700, freeEnergy: 37.1 },
    { step: 800, freeEnergy: 33.8 },
    { step: 900, freeEnergy: 31.2 },
    { step: 1000, freeEnergy: 29.1 },
  ],
  title = "自由能下降曲线"
}: FreeEnergyChartProps) {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="step" 
            stroke="#6B7280"
            label={{ value: '训练步数', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            stroke="#6B7280"
            label={{ value: '自由能', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: 'none', 
              borderRadius: '8px',
              color: '#F9FAFB'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="freeEnergy" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6 }}
            name="自由能"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
