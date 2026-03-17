const divisions = [
  'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur', 'Mymensingh',
];

const Field = ({ label, error, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default function DeliveryForm({ register, errors }) {
  const input =
    'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors';

  return (
    <div className="space-y-4">
      <h2
        className="text-xl font-bold text-gray-800 mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Delivery Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name *" error={errors.fullName?.message}>
          <input
            {...register('fullName', { required: 'Name is required' })}
            type="text"
            placeholder="আপনার পূর্ণ নাম"
            className={input}
          />
        </Field>

        <Field label="Phone Number *" error={errors.phone?.message}>
          <input
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^01[3-9]\d{8}$/, message: 'Enter valid BD number (01XXXXXXXXX)' },
            })}
            type="tel"
            placeholder="01712345678"
            className={input}
          />
        </Field>
      </div>

      <Field label="Address Line *" error={errors.address?.message}>
        <input
          {...register('address', { required: 'Address is required' })}
          type="text"
          placeholder="বাড়ি নং, রাস্তা নং"
          className={input}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Para / Mohalla" error={errors.para?.message}>
          <input
            {...register('para')}
            type="text"
            placeholder="পাড়া / মহল্লা"
            className={input}
          />
        </Field>

        <Field label="Thana / Upazila *" error={errors.thana?.message}>
          <input
            {...register('thana', { required: 'Thana is required' })}
            type="text"
            placeholder="থানা / উপজেলা"
            className={input}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Zila / District *" error={errors.zila?.message}>
          <input
            {...register('zila', { required: 'District is required' })}
            type="text"
            placeholder="জেলা"
            className={input}
          />
        </Field>

        <Field label="Division *" error={errors.division?.message}>
          <select
            {...register('division', { required: 'Division is required' })}
            className={input}
          >
            <option value="">বিভাগ নির্বাচন করুন</option>
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Order Note (optional)">
        <textarea
          {...register('note')}
          rows={2}
          placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন..."
          className={`${input} resize-none`}
        />
      </Field>
    </div>
  );
}
