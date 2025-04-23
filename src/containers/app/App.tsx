import Header from '../../components/header/Header';

function App() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            <Header/>

            {/* Main content*/}
            <div className="flex flex-1 px-2 pb-2">
                <div className="flex flex-1 bg-white rounded-md justify-center items-center">
                </div>
            </div>
        </main>
    )
}

export default App
