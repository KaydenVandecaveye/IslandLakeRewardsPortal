import { useState } from 'react';

export default function Deals() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    expiresAt: '',
    type: 'permanent',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDeal = {
      ...formData,
      price: parseInt(formData.price),
      expiresAt: formData.type === 'limited' ? formData.expiresAt : null,
    };

    try {
      const response = await fetch('http://localhost:3001/deal/createDeal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDeal),
      });

      if (!response.ok) throw new Error('Failed to add deal');

      alert('Deal added!');
      setFormData({
        title: '',
        description: '',
        price: '',
        expiresAt: '',
        type: 'permanent',
      });
    }
    catch(e) {
      console.error('Error adding deal:', e);
      alert('Failed to add deal.');
    }
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '1px solid #dbdbdb',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: '#fafafa',
  };

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '2rem 1rem',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          fontFamily: 'sans-serif',
        }}
      >
        Create New Deal
      </h2>
  
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />
  
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          style={inputStyle}
        />
  
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Point Cost"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
  
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="permanent">Permanent</option>
          <option value="limited">Limited</option>
        </select>
  
        {formData.type === 'limited' && (
          <input
            type="date"
            id="expiresAt"
            name="expiresAt"
            value={formData.expiresAt}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        )}
  
        <button
          type="submit"
          style={{
            padding: '0.9rem',
            backgroundColor: '#3897f0', // Instagram blue
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Add Deal
        </button>
      </form>
    </div>
  );
}
