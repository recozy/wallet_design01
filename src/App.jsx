import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TabLayout from "./components/TabLayout";
import { Login, Main, Find, FindResult, Signup, WalletDetail, WalletResv, WalletSend, QrScanner, Swap, SwapLog, MyPage, Address, Modify, Faq, QnaList, QnaView, QnaWrite, Export, NoticeView, NoticeList, Setting } from "./pages";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* header x / tabMenu x */}
            <Route path="/login" element={<Login />} />
            <Route path="/Find" element={<Find />} />
            <Route path="/FindResult" element={<FindResult />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/QnaList" element={<QnaList />} />
            <Route path="/QnaView" element={<QnaView />} />
            <Route path="/QnaWrite" element={<QnaWrite />} />
            <Route path="/NoticeView" element={<NoticeView />} />
            <Route path="/NoticeList" element={<NoticeList />} />
            
            {/* header x / tabMenu o */}
            <Route element={<TabLayout/>}>
                <Route path="/WalletDetail" element={<WalletDetail />} />
                <Route path="/WalletResv" element={<WalletResv />} />
                <Route path="/WalletSend" element={<WalletSend />} />
                <Route path="/QrScanner" element={<QrScanner />} />
                <Route path="/Swap" element={<Swap />} />
                <Route path="/SwapLog" element={<SwapLog />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/Address" element={<Address />} />
                <Route path="/Modify" element={<Modify />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/Export" element={<Export />} />
                <Route path="/Setting" element={<Setting />} />
            </Route>

            {/* header o / tabMenu o */}
            <Route element={<Layout/>}>
                <Route path="/" element={<Main />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
