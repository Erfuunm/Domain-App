
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-screen fixed left-0 p-4">
      <div className="text-white text-xl mb-8 font-bold">Domain Manager</div>
      <Menu
        theme="dark"
        mode="inline"
        className="bg-zinc-800 rounded-xl border-0"
        items={[
          {
            key: 'domains',
            icon: <AppstoreOutlined />,
            label: 'Domains',
          },
        ]}
      />
    </div>
  )
}