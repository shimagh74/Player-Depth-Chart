import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import DepthChart from './pages/DepthChart';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '8px',
            padding: '16px',
          },
        }}
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
          <aside className="lg:col-span-1 h-full">
            <AddPlayerForm />
          </aside>
          <section className="lg:col-span-3 h-full">
            <DepthChart />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;