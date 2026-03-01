"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

interface AblationData {
  component: string;
  accuracy: number;
  drop?: number;
}

interface AblationStudyChartProps {
  data?: AblationData[];
  title?: string;
}

export default function AblationStudyChart({ 
  data = [
    { component: '完整 NCT', accuracy: 97.8, drop: 0 },
    { component: '- 多候选竞争', accuracy: 95.2, drop: 2.6 },
    { component: '- STDP 学习', accuracy: 94.1, drop: 3.7 },
    { component: '- 预测编码', accuracy: 93.5, drop: 4.3 },
    { component: '- 注意力机制', accuracy: 89.7, drop: 8.1 },
    { component: '基础 Transformer', accuracy: 85.3, drop: 12.5 },
  ],
  title = "消融实验：各组件贡献度"
}: AblationStudyChartProps) {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            type="number"
            stroke="#6B7280"
            label={{ value: '准确率 (%)', position: 'insideBottomRight', offset: -5 }}
            domain={[80, 100]}
          />
          <YAxis 
            dataKey="component"
            type="category"
            stroke="#6B7280"
            width={120}
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
          <Bar dataKey="accuracy" name="准确率 (%)" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === 0 ? '#3B82F6' : '#EF4444'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
