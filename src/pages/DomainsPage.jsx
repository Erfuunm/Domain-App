import { useState } from 'react'
import { Drawer, Button, Input, message } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import DomainTable from '../components/Domain/DomainTable'
import DomainForm from '../components/Domain/DomainForm'
import { useAddDomainMutation, useUpdateDomainMutation } from '../features/domain/domainSlice'

export default function DomainsPage() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [editDomain, setEditDomain] = useState(null)
    const [addDomain] = useAddDomainMutation()
    const [updateDomain] = useUpdateDomainMutation()


  const handleSubmit = async (values) => {
    try {
      if (editDomain) {
        await updateDomain({ id: editDomain.id, ...values }).unwrap()
        message.success('Domain updated successfully')
      } else {
        await addDomain({
          ...values,
          createdDate: Math.floor(Date.now() / 1000)
        }).unwrap()
        message.success('Domain added successfully')
      }
      setOpen(false)
      setEditDomain(null)
    } catch (err) {
      message.error(`Error ${editDomain ? 'updating' : 'adding'} domain`)
    }
  }
  return (
    <div className="text-white">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Manage Domains</h1>
        <div className="flex gap-4">
 
          <Button 
            className='bg-gray-800'
            icon={<PlusOutlined />}
            onClick={() => setOpen(true)}
          >
            New Domain
          </Button>
        </div>
      </div>

 <div className='w-full mt-2 mb-4'>
 <Input
            placeholder="Search domains..."
            prefix={<SearchOutlined />}
            allowClear
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
 </div>

      <DomainTable 
        search={search} 
        onEdit={setEditDomain}
        onEditOpen={() => setOpen(true)}
      />

      <Drawer
        title={editDomain ? "Edit Domain" : "Create New Domain"}
        open={open}
        onClose={() => {
          setOpen(false)
          setEditDomain(null)
        }}
        width={500}
        destroyOnClose
      >
        <DomainForm 
          onFinish={handleSubmit} 
          initialValues={editDomain}
        />
      </Drawer>
    </div>
  )
}