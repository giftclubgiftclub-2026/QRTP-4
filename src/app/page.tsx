export default function Home() {
  return (
    <main style={{ padding: '48px 24px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '16px' }}>QRTP-4 Verification Portal</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>QR Token Passport Registry — Identity before Economy</p>
      <div style={{ padding: '24px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #0ea5e9' }}>
        <p style={{ margin: 0, fontSize: '16px' }}>✅ <strong>Status:</strong> ONLINE</p>
      </div>
      <div style={{ marginTop: '32px', padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>API Endpoints:</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '8px 0' }}>📍 <code>/api/v1/verify/[id]</code> - Verify passport</li>
          <li style={{ padding: '8px 0' }}>📄 <code>/p/[id]</code> - Passport page</li>
        </ul>
      </div>
    </main>
  );
}
