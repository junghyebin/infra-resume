// ===== 방문자 수 카운터 =====
// S08~10에서 API를 만들면 아래 API_URL에 실제 주소를 넣으세요.
// 비어 있으면 임시(mock) 모드로 동작합니다.
const API_URL = "https://dka1na1owe.execute-api.ap-northeast-2.amazonaws.com/count";

const countEl = document.getElementById("visitor-count");

// 임시 모드: 이 브라우저에서 새로고침할 때마다 숫자가 1씩 올라감
function getMockCount() {
  let count = 0;
  try {
    count = Number(localStorage.getItem("mock-visitor-count")) || 0;
    count += 1;
    localStorage.setItem("mock-visitor-count", String(count));
  } catch (e) {
    count = 1; // 저장소를 못 쓰는 환경이면 1로 표시
  }
  return count;
}

// 실제 모드: API를 호출해서 { "count": 숫자 } 형태의 응답을 받음
async function getApiCount() {
  const response = await fetch(API_URL, { method: "GET" });
  if (!response.ok) {
    throw new Error(`API 응답 오류: ${response.status}`);
  }
  const data = await response.json();
  return data.count;
}

async function updateVisitorCount() {
  if (!countEl) return; // 숫자 자리가 없으면 아무것도 안 함

  try {
    const count = API_URL ? await getApiCount() : getMockCount();
    countEl.textContent = Number(count).toLocaleString("ko-KR");
  } catch (error) {
    console.error("방문자 수를 불러오지 못했습니다:", error);
    countEl.textContent = "-";
  }
}

updateVisitorCount();