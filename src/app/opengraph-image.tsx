import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'NeuroConscious Transformer - 用 Transformer 重构意识神经科学';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo/Icon */}
        <div
          style={{
            fontSize: 80,
            marginBottom: 20,
          }}
        >
          🧠
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#0c4a6e',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          NeuroConscious Transformer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: '#0369a1',
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          用 Transformer 重构意识神经科学
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 20,
          }}
        >
          <div
            style={{
              padding: '15px 30px',
              backgroundColor: '#0ea5e9',
              color: '#fff',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            GWT
          </div>
          <div
            style={{
              padding: '15px 30px',
              backgroundColor: '#0284c7',
              color: '#fff',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            IIT
          </div>
          <div
            style={{
              padding: '15px 30px',
              backgroundColor: '#0369a1',
              color: '#fff',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Predictive Coding
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#64748b',
          }}
        >
          neuroconscious.link
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
