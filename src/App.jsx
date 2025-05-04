import { Provider } from 'react-redux'
import { ConfigProvider, Layout } from 'antd'
import { store } from './store/store'
import Sidebar from './components/Layout/Sidebar'
import DomainsPage from './pages/DomainsPage'

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        token: {
          colorBgContainer: '#1f2937',
          colorText: '#fff',
          colorBorder: '#374151',
          colorPrimary: '#6366f1',
        },
        components: {
          Table: {
            headerBg: '#1f2937',
            headerColor: '#fff',
            borderColor: '#374151',
            rowHoverBg: '#374151',
          },
          Drawer: {
            colorBgElevated: '#1f2937',
            colorText: '#fff',
          },
        },
      }}>
        <Layout className="min-h-screen bg-gray-900">
          <Sidebar />
          <Layout.Content className="ml-64 p-8">
            <DomainsPage />
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    </Provider>
  )
}

export default App