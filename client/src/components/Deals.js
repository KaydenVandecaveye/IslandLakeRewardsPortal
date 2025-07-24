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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = {
      ...formData,
      price: parseInt(formData.price),
      id: Date.now().toString(),
      expiresAt: formData.type === 'limited' ? formData.expiresAt : null,
    };
    console.log('New Deal Created:', newDeal);
    alert('Deal added!');
    setFormData({
      title: '',
      description: '',
      price: '',
      expiresAt: '',
      type: 'permanent',
    });
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-4">Add New Deal</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label htmlFor="title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
  Title
</label>
<input
  type="text"
  id="title"
  name="title"
  placeholder="Type Here"
  value={formData.title}
  onChange={handleChange}
  required
/>

<label htmlFor="description" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
  Description
</label>
<textarea
  id="description"
  name="description"
  placeholder="Type Here"
  value={formData.description}
  onChange={handleChange}
  required
/>

<label htmlFor="price" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
  Point Cost (0 = Promo)
</label>
<input
  type="number"
  id="price"
  name="price"
  placeholder="Type Here"
  value={formData.price}
  onChange={handleChange}
  required
/>


        {/* Deal Duration Label & Dropdown */}
<label htmlFor="type" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
  Deal Duration
</label>
<select
  id="type"
  name="type"
  value={formData.type}
  onChange={handleChange}
  required
>
  <option value="permanent">Permanent</option>
  <option value="limited">Limited</option>
</select>

{/* Expiration Date Field with Label */}
{formData.type === 'limited' && (
  <div>
    <label htmlFor="expiresAt" style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.25rem', display: 'block' }}>
      Set Expiration Date
    </label>
    <input
      type="date"
      id="expiresAt"
      name="expiresAt"
      value={formData.expiresAt}
      onChange={handleChange}
      required
    />
  </div>
)}


        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Add Deal
        </button>
      </form>
    </div>
  );
}
