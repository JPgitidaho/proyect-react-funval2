import Home from './pages/Home';
import GitHubRibbon from './componentes/GitHubRibbon';

export default function App() {
  return (
    <div className="min-h-screen bg-white md:px-20">
      <GitHubRibbon />
      <Home />
    </div>
  );
}