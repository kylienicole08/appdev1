import { StudentProvider, StudentProfile } from './StudentProfile';

const App = () => (
  <StudentProvider>
    <div>
    <StudentProfile />
    </div>
  </StudentProvider>
);

export default App;