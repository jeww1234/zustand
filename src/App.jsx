import "./App.css";
import ContactForm from "./Component/ContactForm";
import ContactList from "./Component/ContactList";
import { Grid } from "@mui/material";
import ContactSearch from "./Component/ContactSearch";

function App() {
  // 왼쪽 연락처 등록 / 오른쪽 연락처 리스트와 서치창
  // 연락처에는 전화번호 이름 추가
  // 리스트에 아이템 몇개 잇는지
  // 이름 검색으로 리스트를 찾을 수 있다.
  return (
    <div>
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactSearch />
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
