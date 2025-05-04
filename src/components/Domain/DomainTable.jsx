import { Table, Tag, Switch, Popconfirm, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useGetDomainsQuery, useUpdateDomainMutation, useDeleteDomainMutation } from '../../features/domain/domainSlice'

export default function DomainTable({ search, onEdit, onEditOpen }) {
  const { data: domains, isLoading } = useGetDomainsQuery()
  const [updateDomain] = useUpdateDomainMutation()
  const [deleteDomain] = useDeleteDomainMutation()

  const filteredDomains = domains?.filter(domain => 
    domain?.domain?.toLowerCase?.().includes(search.toLowerCase())
  ) ?? [];


  const handleEdit = (record) => {
    onEdit(record)
    onEditOpen()
  }
  const columns = [
    {
      title: 'Domain Name',
      dataIndex: 'domain',
      key: 'domain',
      sorter: (a, b) => a.domain.localeCompare(b.domain),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={
          status === 'verified' ? 'green' : 
          status === 'pending' ? 'orange' : 'red'
        }>
          {status.toUpperCase()}
        </Tag>
      ),
      filters: [
        { text: 'Verified', value: 'verified' },
        { text: 'Pending', value: 'pending' },
        { text: 'Rejected', value: 'rejected' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (active, record) => (
        <Switch 
          checked={active} 
       
        />
      ),
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      render: (date) => new Date(date * 1000).toLocaleDateString(),
      sorter: (a, b) => a.createdDate - b.createdDate,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
<div className="flex gap-2">
  <Button 
    icon={<EditOutlined />} 
    onClick={() => handleEdit(record)}
  />
  <Popconfirm
     title={
        <span style={{ color: "black" }}> {/* Change color here */}
          Delete this domain?
        </span>
      }
    onConfirm={() => deleteDomain(record.id)}
    overlayStyle={{
      background: "", // bg-gray-800
      color: "black",
      border: "1px solid #374151", // border-gray-700
      borderRadius: "8px",
      padding: "16px",
    }}
    okButtonProps={{ style: { background: "#6b7280", borderColor: "#ef4444" } }} 
    cancelButtonProps={{ style: { color: "white", borderColor: "#6b7280" , backgroundColor: "#ef4444" } }}
  >
    <Button danger icon={<DeleteOutlined />} />
  </Popconfirm>
</div>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={filteredDomains}
      loading={isLoading}
      rowKey="id"
      pagination={{ pageSize: 8 }}
      className="rounded-lg overflow-hidden"
    />
  )
}