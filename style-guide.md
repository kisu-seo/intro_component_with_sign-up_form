# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

### Background by breakpoint

- **Mobile** (0 ~ 767px): `images/bg-intro-mobile.png`
- **Tablet** (768px ~ 1023px): `images/bg-intro-mobile.png`
- **Desktop** (1024px 이상): `images/bg-intro-desktop.png`

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Red 400: hsl(0, 100%, 74%) / #FF7979
- Green 400: hsl(154, 59%, 51%) / #38CC8B
- Green 300: hsl(154, 65%, 68%) / #77E2B3

### Accent

- Purple 700: hsl(248, 32%, 49%) / #5E54A4
- Purple 400: hsl(247, 32%, 72%) / #A6A1CF

### Neutral

- Gray 900: hsl(249, 10%, 26%) / #3D3B48
- Gray 200: hsl(0, 0%, 87%) / #DEDEDE
- Purple 350: hsl(246, 25%, 77%) / #BAB7D4

### Base Colors

- White: hsl(0, 100%, 100%) / #FFFFFF
- Black: hsl(0, 0%, 0%) / #000000

## Typography

### Font Family

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Text Presets

#### Text Preset 1 - Poppins Bold

- Font size: 50px
- Line height: 110%
- Letter spacing: -0.5px
- Font weight: 700 (Bold)
- **용도**: 메인 헤드라인, 히어로 섹션 제목

#### Text Preset 2 - Poppins Bold

- Font size: 28px
- Line height: 130%
- Letter spacing: -0.3px
- Font weight: 700 (Bold)
- **용도**: 서브 헤드라인, 섹션 제목

#### Text Preset 3 - Poppins Medium

- Font size: 16px
- Line height: 165%
- Letter spacing: 0px
- Font weight: 500 (Medium)
- **용도**: 본문 텍스트, 일반 문단

#### Text Preset 4 (Bold) - Poppins Bold

- Font size: 15px
- Line height: 175%
- Letter spacing: 0.25px
- Font weight: 700 (Bold)
- **용도**: 강조된 작은 제목, 버튼 텍스트

#### Text Preset 4 (SemiBold) - Poppins SemiBold

- Font size: 15px
- Line height: 175%
- Letter spacing: 2px
- Font weight: 600 (SemiBold)
- **용도**: 중간 강조 텍스트

#### Text Preset 4 (Regular) - Poppins Regular

- Font size: 15px
- Line height: 175%
- Letter spacing: 0.25px
- Font weight: 400 (Regular)
- **용도**: 일반 작은 텍스트

#### Text Preset 5 (Bold) - Poppins Bold

- Font size: 11px
- Line height: 190%
- Letter spacing: 0px
- Font weight: 700 (Bold)
- **용도**: 작은 라벨, 캡션 강조

#### Text Preset 5 (Medium) - Poppins Medium

- Font size: 11px
- Line height: 190%
- Letter spacing: 0px
- Font weight: 500 (Medium)
- **용도**: 작은 라벨, 부가 정보

#### Text Preset 5 (Medium Italic) - Poppins Medium Italic

- Font size: 11px
- Line height: 155%
- Letter spacing: 0px
- Font weight: 500 (Medium Italic)
- **용도**: 작은 이탤릭 텍스트, 주석

## Spacing

일관된 간격을 유지하기 위한 8단계 spacing 시스템입니다.

### Spacing Scale

- **spacing-0**: 0px - 간격 없음
- **spacing-100**: 8px - 매우 작은 간격 (아이콘과 텍스트 사이, 작은 요소 간격)
- **spacing-200**: 16px - 작은 간격 (버튼 내부 여백, 폼 요소 간격)
- **spacing-300**: 24px - 중간 간격 (카드 내부 여백, 관련 요소 그룹)
- **spacing-400**: 32px - 큰 간격 (섹션 내부 여백, 큰 요소 간격)
- **spacing-500**: 40px - 매우 큰 간격 (섹션 간 여백)
- **spacing-600**: 48px - 아주 큰 간격 (주요 섹션 구분)
- **spacing-800**: 64px - 최대 간격 (페이지 상하단 여백, 주요 섹션 분리)

### 사용 가이드

```css
/* 예시: CSS 변수로 활용 */
:root {
  --spacing-0: 0px;
  --spacing-100: 8px;
  --spacing-200: 16px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
  --spacing-600: 48px;
  --spacing-800: 64px;
}

/* 버튼 내부 여백 */
.button {
  padding: var(--spacing-200) var(--spacing-400);
}

/* 섹션 간 여백 */
.section {
  margin-bottom: var(--spacing-800);
}
```
