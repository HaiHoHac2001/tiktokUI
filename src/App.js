import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from'./layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        let Layout = DefaultLayout;
                        if(route.layout){
                            Layout = route.layout
                        }
                        else if(route.layout === null) {
                            Layout = Fragment
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
