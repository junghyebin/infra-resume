# Resume Project Design & Architecture Spec

## 1. Primary Target Files
- `frontend/index.html`
- `frontend/style.css`

## 2. Design Concept & Layout Strategy
- **Style:** Extreme Minimal Dark Mode (Linear / Vercel Dashboard Style)
- **Theme Color:** Very Dark Slate/Navy (`#0B0F19`), Border Line (`#1E293B`), Accent Indigo (`#6366f1`) & Cyan (`#06b6d4`)
- **Structure Philosophy:** 
  - 한 화면에 길게 늘어놓지 않는 **'깔끔한 모듈형 대시보드'** UI
  - 기본 메인 화면은 핵심 요약 카드와 메뉴만 노출하여 시각적 피로도 최소화
  - 프로젝트, 상세 경력, 기술 아키텍처 등은 **'클릭 시 모달(Modal) 팝업'** 또는 **'카드가 확장(Expand)'**되며 구체적인 내용을 상세히 보여주는 구조
  - 탭/필터 클릭으로 필요한 정보만 선택해서 볼 수 있는 직관적인 정보 전달

## 3. Section & Feature Breakdown

### ① Profile / Hero Header
- **기본 정보:** 정혜빈 (Jung Hyebin) | Cloud & Infrastructure Engineer
- **한 줄 요약:** "제조·물류 현장 시스템 운영 경험 기반의 안정적인 하이브리드 클라우드 & 인프라 엔지니어"
- **Quick Links:** GitHub, Tistory (`https://bini94-tech.tistory.com`), Contact Email

### ② Interactive Projects (모달/확장형 카드)
- **핵심 컨셉:** 프로젝트 대표 카드만 심플하게 노출 (클릭 시 상세 모달 레이어 오픈)
- **Beever 하이브리드 클라우드 DR 아키텍처**
  - [클릭 시 모달 내용]: AWS EKS-VMware Tailscale VPN 연동, RDS Failover, k6/Prometheus/Grafana 스트레스 테스트 결과 상세
- **Cloud Resume Challenge**
  - [클릭 시 모달 내용]: AWS S3/CloudFront 기반 이력서 웹사이트 인프라 구축기

### ③ Core Skills & Experience (탭 구분 또는 그리드 카드)
- **Skills:** Cloud/Infra, OS/Server, Dev/DB 범주별 심플한 뱃지 레이아웃
- **Experience:** 포메이션랩스(3년 10개월 WMS/MES 운영), KT Cloud Tech Up Bootcamp 핵심 이력 요약 (클릭 시 세부 성과 표시)

### ④ Media & Vlog (향후 확장용 플레이스홀더)
- **Vlog / Tech Video Section:** 
  - 엔지니어링 브이로그 및 프로젝트 시연 영상 연결을 위한 비디오 카드 UI (유튜브 썸네일 플레이어 형태)
  - "Coming Soon" 또는 예시 임베드 플레이어로 깔끔한 카드 배치

## 4. Technical Requirements
- pure HTML, CSS, lightweight JavaScript (Modal open/close, Tab switching controls)
- 모바일 및 데스크톱 반응형 처리
- 모달 열릴 때 부드러운 Fade-in/Backdrop blur 효과 적용