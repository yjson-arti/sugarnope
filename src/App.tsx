/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, User, ShoppingBag, X, ChevronLeft, ChevronRight, Pause, Tag, MapPin, ThumbsUp, Star, Gift, Award, Heart, MessageSquare, ShoppingCart } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#f5f5f5] text-[#555] text-xs py-2 px-4 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <span>슈가놉 홍대 1호점 — 24시간 저당 디저트 무인 스토어</span>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-gray-800">
            <input type="checkbox" className="w-3 h-3 accent-gray-500 rounded-sm border-gray-300" />
            <span>오늘 하루 보지 않기</span>
          </label>
          <button onClick={() => setIsVisible(false)} className="hover:text-black transition-colors">
            <X size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
    <div className="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <a href="/" className="text-red-500 font-black text-2xl tracking-tighter flex items-center">
          <span className="text-[#e23e3e]">Sugar</span>
          <span className="text-[#e23e3e] ml-0.5">Nope!</span>
        </a>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-800">
        <a href="#" className="hover:text-red-500 transition-colors">NEW</a>
        <a href="#" className="hover:text-red-500 transition-colors">BEST</a>
        <a href="#" className="hover:text-red-500 transition-colors">SALE</a>
        <a href="#" className="hover:text-red-500 transition-colors">EVENT</a>
        <a href="#" className="hover:text-red-500 transition-colors">About SugarNope</a>
      </nav>

      <div className="flex items-center gap-6 text-gray-800">
        <button className="hover:text-red-500 transition-colors"><Search size={22} strokeWidth={1.5} /></button>
        <button className="hover:text-red-500 transition-colors"><User size={22} strokeWidth={1.5} /></button>
        <button className="hover:text-red-500 transition-colors"><ShoppingBag size={22} strokeWidth={1.5} /></button>
      </div>
    </div>
  </header>
);

const HeroSection = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-[400px] h-[400px] rounded-2xl bg-[#ff6b81] p-10 flex flex-col justify-end snap-center shrink-0 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-white text-3xl font-bold mb-4 leading-tight relative z-10">
              무인 매장에서 만나는 당일<br />생산 수제 디저트
            </h2>
            <p className="text-white/90 text-sm leading-relaxed relative z-10 font-medium">
              비건 크럼블, 저당 카스테라, 수제 쿠키 — 쇼케<br />이스에서 직접 고르세요
            </p>
          </div>
          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-[400px] h-[400px] rounded-2xl bg-[#e0f2e9] p-10 flex flex-col justify-end snap-center shrink-0 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-white text-3xl font-bold mb-4 leading-tight drop-shadow-md relative z-10">
              이유를 설명할 수 있는 제품만<br />판매합니다
            </h2>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow-md relative z-10 font-medium">
              당류 10g 이하 기준, 혈당 영향 대체당 배제 —<br />성분표를 직접 확인하지 않아도 됩니다
            </p>
          </div>
          {/* Card 3 */}
          <div className="min-w-[85vw] md:min-w-[400px] h-[400px] rounded-2xl bg-[#fff9e6] p-10 flex flex-col justify-end snap-center shrink-0 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-white text-3xl font-bold mb-4 leading-tight drop-shadow-md relative z-10">
              슈가놉 입문자 추천 Top 10
            </h2>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow-md relative z-10 font-medium">
              커클랜드 프로틴바부터 비건다움 쿠키까지, 처<br />음이라면 이것부터
            </p>
          </div>
          {/* Card 4 */}
          <div className="min-w-[85vw] md:min-w-[400px] h-[400px] rounded-2xl bg-[#f0e6ff] p-10 flex flex-col justify-end snap-center shrink-0 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-white text-3xl font-bold mb-4 leading-tight drop-shadow-md relative z-10">
              두두리두팡!<br />가장 핫한 저당...
            </h2>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow-md relative z-10 font-medium">
              온라인에서만 살 수...<br />바로 만나세요
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
            <button className="text-gray-400 hover:text-black transition-colors"><ChevronLeft size={18} strokeWidth={2.5} /></button>
            <span className="text-sm font-bold tracking-widest text-gray-800">02 <span className="text-gray-300 font-normal mx-1">/</span> 06</span>
            <button className="text-gray-400 hover:text-black transition-colors"><ChevronRight size={18} strokeWidth={2.5} /></button>
            <div className="w-px h-4 bg-gray-200 mx-1"></div>
            <button className="text-gray-400 hover:text-black transition-colors"><Pause size={14} fill="currentColor" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const categories = [
    { name: '신규 혜택', icon: Gift },
    { name: '베스트템', icon: Award },
    { name: '슈가놉 추천', icon: Heart },
    { name: '저당 기준', icon: Tag },
    { name: '매장 안내', icon: MapPin },
    { name: '고객 후기', icon: MessageSquare },
    { name: '포인트 적립', icon: Star },
  ];

  return (
    <section className="py-12 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="flex flex-col items-center group cursor-pointer w-[72px] md:w-20">
                <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-[20px] bg-[#f8f9fa] flex items-center justify-center text-gray-700 mb-3 group-hover:bg-[#fff0f0] group-hover:text-[#e23e3e] transition-all duration-300 shadow-sm border border-gray-100">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-800 text-[13px] md:text-[14px] whitespace-nowrap tracking-tight">{cat.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ badge, badgeColor = "bg-[#e23e3e]", title, discount, price, originalPrice }: any) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="w-full aspect-[4/5] bg-[#f5f5f5] rounded-xl mb-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
      <button className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-gray-700 hover:bg-white hover:text-[#e23e3e] transition-colors z-10">
        <ShoppingCart size={18} strokeWidth={2} />
      </button>
    </div>
    <div className="flex flex-col gap-1 px-1">
      {badge && (
        <span className={`text-[11px] font-bold text-white px-1.5 py-0.5 rounded-sm w-fit leading-none mb-1 ${badgeColor}`}>
          {badge}
        </span>
      )}
      <h3 className="text-[15px] text-gray-800 leading-snug group-hover:underline line-clamp-2">{title}</h3>
      <div className="flex items-center gap-1.5 mt-1">
        {discount && <span className="text-[#e23e3e] font-bold text-[17px]">{discount}%</span>}
        <span className="font-bold text-[17px] text-gray-900">{price}원</span>
      </div>
      {originalPrice && <span className="text-gray-400 text-[13px] line-through">{originalPrice}원</span>}
    </div>
  </div>
);

const ProductSection = ({ title, subtitle, showMore = true, children }: any) => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-1.5 tracking-tight">{title}</h2>
          {subtitle && <p className="text-[14px] text-gray-500">{subtitle}</p>}
        </div>
        {showMore && (
          <a href="#" className="text-[14px] text-gray-500 hover:text-gray-900 flex items-center mb-1">
            더보기 <ChevronRight size={16} className="ml-0.5" />
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
        {children}
      </div>
    </div>
  </section>
);

const KirklandExhibition = () => (
  <ProductSection title="커클랜드 프로틴바 기획전" subtitle="가성비 최고! 맛있는 단백질 충전">
    <ProductCard badge="기획전" badgeColor="bg-blue-800" title="커클랜드 시그니처 프로틴바 초코쿠키" discount="15" price="31,900" originalPrice="37,500" />
    <ProductCard badge="기획전" badgeColor="bg-blue-800" title="커클랜드 시그니처 프로틴바 피넛버터" discount="15" price="31,900" originalPrice="37,500" />
    <ProductCard badge="기획전" badgeColor="bg-blue-800" title="커클랜드 시그니처 프로틴바 쿠키앤크림" discount="15" price="31,900" originalPrice="37,500" />
    <ProductCard badge="기획전" badgeColor="bg-blue-800" title="커클랜드 시그니처 프로틴바 브라우니" discount="15" price="31,900" originalPrice="37,500" />
  </ProductSection>
);

const TodaySpecial = () => (
  <ProductSection title="놓칠 수 없는 혜택, 오늘의 특가" subtitle="최고의 가격으로 구매할 수 있는 타이밍!">
    <ProductCard badge="타임특가" badgeColor="bg-green-700" title="[무설탕] 진한 카카오 브라우니 (100g)" discount="28" price="10,800" originalPrice="14,900" />
    <ProductCard badge="New" badgeColor="bg-green-600" title="국내산 아몬드 가루로 만든 키토 식빵" discount="52" price="1,900" originalPrice="3,990" />
    <ProductCard badge="Sale" badgeColor="bg-green-500" title="[BEST] 당류 0g 수제 바닐라 아이스크림" discount="34" price="2,890" originalPrice="4,400" />
    <ProductCard badge="타임특가" badgeColor="bg-green-700" title="마이노멀 알룰로스 100% (500g)" discount="40" price="2,980" originalPrice="4,980" />
  </ProductSection>
);

const SugarnopRecommendation = () => (
  <ProductSection title="슈가놉 추천 이주의 상품" subtitle="깐깐하게 고른 상품에 할인을 더했어요!">
    <ProductCard badge="추천" badgeColor="bg-blue-600" title="글루텐프리 저당 마들렌 4종 세트" discount="20" price="8,700" originalPrice="10,800" />
    <ProductCard badge="추천" badgeColor="bg-blue-600" title="무가당 그릭 요거트 & 그래놀라" discount="15" price="10,100" originalPrice="11,800" />
    <ProductCard badge="추천" badgeColor="bg-blue-600" title="당뇨 환자도 안심하는 100% 카카오 초콜릿" discount="10" price="5,500" originalPrice="6,100" />
    <ProductCard badge="추천" badgeColor="bg-blue-600" title="저당 수제 딸기잼 (250g)" discount="34" price="5,610" originalPrice="8,500" />
  </ProductSection>
);

const PopularItems = () => (
  <ProductSection title="슈가놉 BEST 인기상품">
    <ProductCard badge="BEST" badgeColor="bg-[#e23e3e]" title="[유기농] 당류 제로 콤부차 레몬맛" discount="15" price="4,980" originalPrice="5,800" />
    <ProductCard badge="BEST" badgeColor="bg-[#e23e3e]" title="키토제닉 아몬드 버터 (200g)" discount="23" price="5,900" originalPrice="7,700" />
    <ProductCard badge="BEST" badgeColor="bg-[#e23e3e]" title="무농약 스테비아 토마토 (500g)" discount="21" price="9,300" originalPrice="11,800" />
    <ProductCard badge="BEST" badgeColor="bg-[#e23e3e]" title="저칼로리 곤약면 (150g x 5개)" discount="23" price="3,590" originalPrice="4,700" />
  </ProductSection>
);

const HotNewItems = () => (
  <ProductSection title="슈가놉의 세포들이 반응한 핫한 신상 모음 ✨" subtitle="매주 업데이트되는 새로운 저당 디저트">
    <ProductCard badge="신상" badgeColor="bg-purple-500" title="[신제품] 저당 흑임자 롤케이크" discount="5" price="12,500" originalPrice="13,200" />
    <ProductCard badge="신상" badgeColor="bg-purple-500" title="프로틴 가득 초코칩 쿠키 (5개입)" discount="10" price="8,900" originalPrice="9,900" />
    <ProductCard badge="신상" badgeColor="bg-purple-500" title="무가당 바닐라빈 시럽 (300ml)" discount="15" price="14,500" originalPrice="17,000" />
    <ProductCard badge="신상" badgeColor="bg-purple-500" title="비건 & 저당 피스타치오 젤라또" discount="8" price="18,900" originalPrice="20,500" />
  </ProductSection>
);

const BestsellerItems = () => (
  <ProductSection title="지금 관심도 급상승 중인 상품">
    <ProductCard badge="급상승" badgeColor="bg-orange-500" title="[주간베스트] 저당 팥앙금 (500g)" discount="20" price="7,980" originalPrice="9,980" />
    <ProductCard badge="급상승" badgeColor="bg-orange-500" title="무설탕 건크랜베리 (200g)" discount="5" price="6,500" originalPrice="6,850" />
    <ProductCard badge="급상승" badgeColor="bg-orange-500" title="에리스리톨 천연 감미료 (1kg)" discount="40" price="12,400" originalPrice="20,700" />
    <ProductCard badge="급상승" badgeColor="bg-orange-500" title="저당 단백질 쉐이크 초코맛 (7팩)" discount="10" price="25,900" originalPrice="28,800" />
  </ProductSection>
);

const Footer = () => (
  <footer className="bg-[#1a1c29] text-gray-400 pt-20 pb-10">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="col-span-1 md:col-span-4">
          <div className="text-white font-black text-2xl tracking-tighter flex items-center mb-8">
            <span>Sugar</span>
            <span>Nope!</span>
          </div>
          <p className="text-[13px] leading-relaxed text-gray-400/80">
            당 없이도 맛을 포기하고 싶지 않은 사람들을 위한<br />
            저당·무가당 디저트 무인 스토어. 이유를 설명할 수<br />
            있는 제품만 판매합니다.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-2 md:col-start-6">
          <h4 className="text-white font-bold mb-6 text-[15px]">쇼핑</h4>
          <ul className="space-y-4 text-[13px] text-gray-400/80">
            <li><a href="#" className="hover:text-white transition-colors">전체 상품</a></li>
            <li><a href="#" className="hover:text-white transition-colors">베스트</a></li>
            <li><a href="#" className="hover:text-white transition-colors">신상품</a></li>
            <li><a href="#" className="hover:text-white transition-colors">세일</a></li>
            <li><a href="#" className="hover:text-white transition-colors">입점 브랜드</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-[15px]">고객지원</h4>
          <ul className="space-y-4 text-[13px] text-gray-400/80">
            <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문 (FAQ)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">카카오톡 문의</a></li>
            <li><a href="#" className="hover:text-white transition-colors">매장 안내</a></li>
            <li><a href="#" className="hover:text-white transition-colors">교환/환불 안내</a></li>
            <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-3">
          <h4 className="text-white font-bold mb-6 text-[15px]">고객센터</h4>
          <p className="text-[28px] font-bold text-white tracking-tight">010-2416-9856</p>
        </div>
      </div>

      <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 gap-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center md:justify-start">
          <span>SugarNope</span>
          <span className="w-px h-3 bg-gray-700 hidden sm:block"></span>
          <span>대표: 이희창</span>
          <span className="w-px h-3 bg-gray-700 hidden sm:block"></span>
          <span>사업자등록번호: </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white font-bold transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">입점문의</a>
        </div>

        <div className="text-center md:text-right">
          Copyright &copy; SugarNope. All Rights Reserved. Hosting by Cafe24 Corp.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <Features />
        <KirklandExhibition />
        <TodaySpecial />
        <SugarnopRecommendation />
        <PopularItems />
        <HotNewItems />
        <BestsellerItems />
      </main>
      <Footer />
    </div>
  );
}
