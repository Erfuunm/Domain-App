import { Form, Input, Select, Switch } from 'antd'

export default function DomainForm({ onFinish, initialValues }) {
  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      className="space-y-6"
    >
      <Form.Item
        label="Domain Name"
        name="domain"
        rules={[
          { required: true, message: 'Please enter domain name' },
          { pattern: /^[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/, message: 'Invalid domain format' }
        ]}
      >
        <Input placeholder="example.com" size="large" />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please select status' }]}
      >
        <Select
          size="large"
          options={[
            { value: 'pending', label: 'Pending' },
            { value: 'verified', label: 'Verified' },
            { value: 'rejected', label: 'Rejected' },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Active Status"
        name="isActive"
        valuePropName="checked"
      >
        <Switch className="bg-gray-600" />
      </Form.Item>

      <Form.Item>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {initialValues ? 'Update Domain' : 'Create Domain'}
        </button>
      </Form.Item>
    </Form>
  )
}