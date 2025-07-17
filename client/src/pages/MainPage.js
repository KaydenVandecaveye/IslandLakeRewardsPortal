import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Points from '../components/Points';

function MainPage() {
  const [activeTab, setActiveTab] = useState('points'); // display Points tab by default

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'points':
      default:
        return <Points />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Welcome Admin</h1>

      {/* Info Boxes */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        width: '100%',
        maxWidth: '800px',
        marginBottom: '2rem'
      }}>
        <div style={{
          flex: 1,
          backgroundColor: '#ffffff',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3>Total Redeems</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>123</p>
        </div>
        <div style={{
          flex: 1,
          backgroundColor: '#ffffff',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3>Total Points Used</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4567</p>
        </div>
      </div>

      {/* Full-width Tabs */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '2rem' }}>
        <button
          onClick={() => setActiveTab('dashboard')}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: activeTab === 'dashboard' ? '#007bff' : '#e0e0e0',
            color: activeTab === 'dashboard' ? 'white' : 'black',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            marginBottom: '1rem',
            cursor: 'pointer'
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('points')}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: activeTab === 'points' ? '#007bff' : '#e0e0e0',
            color: activeTab === 'points' ? 'white' : 'black',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Points
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ width: '100%', maxWidth: '800px' }}>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default MainPage;
