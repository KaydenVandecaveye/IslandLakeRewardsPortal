import { useState } from 'react';

export default function Promotions() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    reward: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just logging data right now, FireBase will be connected later 
    console.log('New Promotion:', formData);
    alert('Promotion Created!');
    setFormData({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      reward: ''
    });
  };

  return (
    <div>
      <h2>Create Promotion</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Promotion Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Promotion Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="reward"
          placeholder="Reward/Discount (e.g., 10% off)"
          value={formData.reward}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{
          padding: '0.75rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Create Promotion
        </button>
      </form>
    </div>
  );
}
