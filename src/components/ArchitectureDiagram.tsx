export default function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-hidden">
      <svg viewBox="0 0 1200 800" className="w-full h-auto">
        {/* Background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
          <linearGradient id="moduleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
          </filter>
        </defs>
        
        <rect width="1200" height="800" fill="url(#bgGradient)" />
        
        {/* Title */}
        <text x="600" y="50" textAnchor="middle" className="text-2xl font-bold fill-gray-900">
          NCT System Architecture
        </text>
        
        {/* Input Layer */}
        <g transform="translate(100, 100)">
          <rect width="200" height="60" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
          <text x="100" y="35" textAnchor="middle" className="text-sm font-semibold fill-gray-900">
            Sensory Input
          </text>
          <text x="100" y="50" textAnchor="middle" className="text-xs fill-gray-500">
            Vision / Audio / Text
          </text>
        </g>
        
        {/* Encoder */}
        <g transform="translate(100, 200)">
          <rect width="200" height="80" rx="8" fill="url(#moduleGradient)" filter="url(#shadow)" />
          <text x="100" y="35" textAnchor="middle" className="text-sm font-semibold fill-white">
            Multimodal Encoder
          </text>
          <text x="100" y="55" textAnchor="middle" className="text-xs fill-blue-100">
            Feature Extraction
          </text>
        </g>
        
        {/* Workspace - Center */}
        <g transform="translate(400, 150)">
          <rect width="400" height="300" rx="12" fill="#ffffff" stroke="#8b5cf6" strokeWidth="3" filter="url(#shadow)" />
          
          {/* Workspace Title */}
          <text x="200" y="35" textAnchor="middle" className="text-base font-bold fill-purple-900">
            Attention Workspace (GWT)
          </text>
          
          {/* Multi-Head Attention */}
          <g transform="translate(50, 60)">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${i * 75}, 0)`}>
                <rect width="60" height="50" rx="6" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="30" y="25" textAnchor="middle" className="text-xs font-medium fill-blue-700">
                  Head {i + 1}
                </text>
                <text x="30" y="40" textAnchor="middle" className="text-xs fill-blue-500">
                  {['Visual', 'Emotion', 'Task', 'Novelty'][i]}
                </text>
              </g>
            ))}
          </g>
          
          {/* Candidate Competition */}
          <g transform="translate(50, 130)">
            <rect width="300" height="100" rx="8" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
            <text x="150" y="25" textAnchor="middle" className="text-sm font-semibold fill-purple-900">
              Multi-Candidate Competition
            </text>
            
            {/* Candidates */}
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${i * 70 + 5}, 35)`}>
                <circle r="12" fill={i === 0 ? '#a855f7' : '#e9d5ff'} stroke="#7c3aed" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" className="text-xs font-bold fill-white">
                  {i === 0 ? 'W' : `C${i + 1}`}
                </text>
              </g>
            ))}
          </g>
          
          {/* Output Selection */}
          <g transform="translate(150, 250)">
            <rect width="100" height="40" rx="6" fill="#10b981" filter="url(#shadow)" />
            <text x="50" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">
              Winner
            </text>
          </g>
        </g>
        
        {/* STDP Learning */}
        <g transform="translate(900, 200)">
          <rect width="200" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
          <text x="100" y="35" textAnchor="middle" className="text-sm font-semibold fill-amber-900">
            Transformer-STDP
          </text>
          <text x="100" y="55" textAnchor="middle" className="text-xs fill-amber-700">
            Hybrid Learning
          </text>
        </g>
        
        {/* Predictive Coding */}
        <g transform="translate(900, 320)">
          <rect width="200" height="80" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
          <text x="100" y="35" textAnchor="middle" className="text-sm font-semibold fill-emerald-900">
            Predictive Coding
          </text>
          <text x="100" y="55" textAnchor="middle" className="text-xs fill-emerald-700">
            Free Energy Minimization
          </text>
        </g>
        
        {/* Metrics */}
        <g transform="translate(900, 440)">
          <rect width="200" height="80" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" filter="url(#shadow)" />
          <text x="100" y="35" textAnchor="middle" className="text-sm font-semibold fill-red-900">
            Φ Calculator
          </text>
          <text x="100" y="55" textAnchor="middle" className="text-xs fill-red-700">
            Integrated Information
          </text>
        </g>
        
        {/* Connections */}
        {/* Input → Encoder */}
        <line x1="200" y1="160" x2="200" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Encoder → Workspace */}
        <line x1="300" y1="240" x2="400" y2="240" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        
        {/* Workspace → STDP */}
        <path d="M 800 240 L 900 240" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Workspace → Predictive */}
        <path d="M 800 260 L 900 360" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        
        {/* Workspace → Metrics */}
        <path d="M 800 280 L 900 480" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        
        {/* Feedback loops */}
        <path d="M 1000 280 Q 1050 300 1000 320" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
        <path d="M 1000 400 Q 1050 420 1000 440" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
        
        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
          </marker>
        </defs>
        
        {/* Legend */}
        <g transform="translate(100, 520)">
          <rect width="1000" height="120" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
          <text x="20" y="30" className="text-sm font-semibold fill-gray-900">Legend:</text>
          
          <g transform="translate(20, 50)">
            <rect width="30" height="15" rx="3" fill="#3b82f6" />
            <text x="40" y="12" className="text-xs fill-gray-700">Processing Flow</text>
          </g>
          
          <g transform="translate(180, 50)">
            <rect width="30" height="15" rx="3" fill="#8b5cf6" />
            <text x="40" y="12" className="text-xs fill-gray-700">Attention Modulation</text>
          </g>
          
          <g transform="translate(380, 50)">
            <line x1="0" y1="7" x2="30" y2="7" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
            <text x="40" y="12" className="text-xs fill-gray-700">Feedback Loop</text>
          </g>
          
          <g transform="translate(540, 50)">
            <circle r="7" fill="#a855f7" />
            <text x="15" y="4" className="text-xs font-bold fill-white">W</text>
            <text x="25" y="12" className="text-xs fill-gray-700">Winner Candidate</text>
          </g>
          
          {/* Key Metrics */}
          <g transform="translate(20, 85)">
            <text x="0" y="0" className="text-xs font-semibold fill-gray-900">Key Metrics: </text>
            <text x="70" y="0" className="text-xs fill-blue-600">Φ=0.329 </text>
            <text x="130" y="0" className="text-xs fill-purple-600">Accuracy=92% </text>
            <text x="210" y="0" className="text-xs fill-green-600">Latency&lt;2ms</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
