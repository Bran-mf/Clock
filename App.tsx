import { ModaProvider } from './Context/ModalProvider';
import Board from './Views/Board/Board';

export default function App() {
    return (
        <ModaProvider>
            <Board />
        </ModaProvider>
    );
}
