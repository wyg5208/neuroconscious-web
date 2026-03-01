"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

interface STDPData {
  method: string;
  accuracy: number;
  improvement?: number;
}

interface STDPComparisonChartProps {
  data?: STDPData[];
  title?: string;
}

export default function STDPComparisonChart({ 
  data = [
    { method: '传统 CNN', accuracy: 92.3, improvement: 0 },
    { method: 'ResNet-18', accuracy: 94.1, improvement: 1.8 },
    { method: 'Transformer', accuracy: 95.2, improvement: 2.9 },
    { method: 'NCT (Ours)', accuracy: 97.8, improvement: 5.5 },
  ],
  title = "STDP 学习曲线对比"
}: STDPComparisonChartProps) {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="method" 
            stroke="#6B7280"
            angle={-15}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#6B7280"
            label={{ value: '准确率 (%)', angle: -90, position: 'insideLeft' }}
            domain={[90, 100]}
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
          <Bar dataKey="accuracy" name="准确率 (%)" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === data.length - 1 ? '#3B82F6' : '#9CA3AF'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
