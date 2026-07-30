import React from "react";

const familyData = {
  id: 1,
  name: "Nguyễn Văn An",
  gender: "Nam",
  birth: "1945",
  death: null,
  avatar: "https://i.pravatar.cc/150?img=12",

  spouse: {
    id: 2,
    name: "Trần Thị Hoa",
    gender: "Nữ",
    birth: "1948",
    death: null,
    avatar: "https://i.pravatar.cc/150?img=47",
  },

  children: [
    {
      id: 3,
      name: "Nguyễn Văn Bình",
      gender: "Nam",
      birth: "1970",
      death: null,
      avatar: "https://i.pravatar.cc/150?img=11",

      spouse: {
        id: 4,
        name: "Lê Thị Lan",
        gender: "Nữ",
        birth: "1973",
        death: null,
        avatar: "https://i.pravatar.cc/150?img=44",
      },

      children: [
        {
          id: 9,
          name: "Nguyễn Minh Khôi",
          gender: "Nam",
          birth: "1995",
          avatar: "https://i.pravatar.cc/150?img=13",

          spouse: {
            id: 12,
            name: "Trần Ngọc Linh",
            gender: "Nữ",
            birth: "1996",
            avatar: "https://i.pravatar.cc/150?img=45",
          },

          children: [
            {
              id: 14,
              name: "Nguyễn Gia Huy",
              gender: "Nam",
              birth: "2022",
              avatar: "https://i.pravatar.cc/150?img=15",
            },
            {
              id: 15,
              name: "Nguyễn Gia Linh",
              gender: "Nữ",
              birth: "2024",
              avatar: "https://i.pravatar.cc/150?img=48",
            },
          ],
        },

        {
          id: 10,
          name: "Nguyễn Thu Trang",
          gender: "Nữ",
          birth: "1998",
          avatar: "https://i.pravatar.cc/150?img=46",
        },
      ],
    },

    {
      id: 5,
      name: "Nguyễn Văn Cường",
      gender: "Nam",
      birth: "1974",
      avatar: "https://i.pravatar.cc/150?img=14",

      spouse: {
        id: 6,
        name: "Phạm Thị Mai",
        gender: "Nữ",
        birth: "1976",
        avatar: "https://i.pravatar.cc/150?img=49",
      },

      children: [
        {
          id: 11,
          name: "Nguyễn Đức Long",
          gender: "Nam",
          birth: "2000",
          avatar: "https://i.pravatar.cc/150?img=16",
        },
        {
          id: 17,
          name: "Nguyễn Khánh Vy",
          gender: "Nữ",
          birth: "2001",
          avatar: "https://i.pravatar.cc/150?img=50",
        },
      ],
    },

    {
      id: 7,
      name: "Nguyễn Thị Hạnh",
      gender: "Nữ",
      birth: "1978",
      avatar: "https://i.pravatar.cc/150?img=51",

      spouse: {
        id: 8,
        name: "Đỗ Văn Hùng",
        gender: "Nam",
        birth: "1975",
        avatar: "https://i.pravatar.cc/150?img=17",
      },

      children: [
        {
          id: 13,
          name: "Đỗ Gia Bảo",
          gender: "Nam",
          birth: "2002",
          avatar: "https://i.pravatar.cc/150?img=18",
        },
        {
          id: 18,
          name: "Đỗ Minh Anh",
          gender: "Nữ",
          birth: "2005",
          avatar: "https://i.pravatar.cc/150?img=52",
        },
      ],
    },
  ],
};

// ---- design tokens -------------------------------------------------------
const INK = "#2B1B12"; // nâu gỗ trầm
const LACQUER = "#7A1F1F"; // đỏ son
const LACQUER_DARK = "#5C1717";
const GOLD = "#C9A227";
const GOLD_SOFT = "#E4C766";
const PARCHMENT = "#F3E7CB";
const PARCHMENT_CARD = "#FDF6E4";

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const fretSvg = (color) => `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='12'>
  <path d='M0 9 H6 V3 H14 V9 H22 V3 H30' fill='none' stroke='${color}' stroke-width='1.6' stroke-linecap='square'/>
</svg>`;
const fretPattern = (color) =>
  `url("data:image/svg+xml,${encodeURIComponent(fretSvg(color))}")`;

// Hoa văn nền: vân mây cuộn (mây như ý), họa tiết cổ truyền thường thấy trên hoành phi, án thờ
const motifSvg = (line, bloom) => `<svg xmlns='http://www.w3.org/2000/svg' width='84' height='84' viewBox='0 0 84 84'>
  <g fill='none' stroke='${line}' stroke-width='1.5' stroke-linecap='round'>
    <path d='M8 46 C6 30 18 18 34 18 C43 18 47 24 43 30 C40 34 33 33 34 27'/>
    <path d='M76 38 C78 54 66 66 50 66 C41 66 37 60 41 54 C44 50 51 51 50 57'/>
  </g>
  <circle cx='34' cy='27' r='2' fill='${bloom}'/>
  <circle cx='50' cy='57' r='2' fill='${bloom}'/>
</svg>`;
const motifPattern = (line, bloom) =>
  `url("data:image/svg+xml,${encodeURIComponent(motifSvg(line, bloom))}")`;

function FretBorder({ color = GOLD, className = "" }) {
  return (
    <div
      aria-hidden
      className={`h-[10px] w-full ${className}`}
      style={{
        backgroundImage: fretPattern(color),
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        opacity: 0.85,
      }}
    />
  );
}

function LotusDivider() {
  const petal = (i) => (
    <svg key={i} width="14" height="14" viewBox="0 0 14 14" key={i}>
      <path
        d="M7 13 C2 10 2 4 7 1 C12 4 12 10 7 13 Z"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.2"
      />
      <circle cx="7" cy="7" r="1.3" fill={LACQUER} />
    </svg>
  );
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="h-[1px] w-12 sm:w-16" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
      {[0, 1, 2].map(petal)}
      <span className="h-[1px] w-12 sm:w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
    </div>
  );
}

function SealMark({ size = 30 }) {
  return (
    <div
      className="flex items-center justify-center rounded-[4px] font-bold"
      style={{
        width: size,
        height: size,
        background: LACQUER,
        color: PARCHMENT_CARD,
        border: `1px solid ${GOLD_SOFT}`,
        fontFamily: "'Noto Serif', serif",
        fontSize: size * 0.4,
        transform: "rotate(-6deg)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.35)",
        writingMode: "vertical-rl",
        letterSpacing: "1px",
      }}
      title="Thủy tổ"
    >
      始祖
    </div>
  );
}

function ElegantCorner({ position }) {
  const rotation = {
    "top-left": 0,
    "top-right": 90,
    "bottom-right": 180,
    "bottom-left": 270,
  }[position];

  const offset = {
    "top-left": { top: "10px", left: "10px" },
    "top-right": { top: "10px", right: "10px" },
    "bottom-right": { bottom: "10px", right: "10px" },
    "bottom-left": { bottom: "10px", left: "10px" },
  }[position];

  return (
    <div
      aria-hidden
      className="absolute z-10 h-11 w-11 sm:h-16 sm:w-16 opacity-95"
      style={{ ...offset, transform: `rotate(${rotation}deg)`, transformOrigin: "50% 50%" }}
    >
      <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
        {/* khung viền kép */}
        <path d="M2 26 V6 Q2 2 6 2 H26" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M9 30 V13 Q9 9 13 9 H30" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />

        {/* cuộn mây như ý */}
        <path
          d="M14 26 Q10 18 17 14 Q23 11 25 16 Q27 20 22 21 Q18 22 18 18"
          stroke={LACQUER}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* chấm son + viền vàng */}
        <circle cx="15" cy="15" r="3.2" fill={LACQUER} stroke={GOLD} strokeWidth="0.9" />

        {/* đầu thoi vàng */}
        <path d="M26 2 L31 7 L26 12 L21 7 Z" fill={GOLD} />
      </svg>
    </div>
  );
}

function GenerationLabel({ level }) {
  return (
    <div className="relative mb-6 flex items-center justify-center gap-3 pt-3">
      <span className="h-[1px] w-10 sm:w-16" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
      <span
        className="relative rounded-full px-4 sm:px-6 py-1 text-[11px] sm:text-xs font-bold tracking-[0.2em]"
        style={{
          background: `linear-gradient(135deg, ${LACQUER_DARK}, ${LACQUER})`,
          color: GOLD_SOFT,
          fontFamily: "'Noto Serif', serif",
          border: `1.5px solid ${GOLD}`,
          boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
        }}
      >
        ĐỜI THỨ {ROMAN[level] || level}
      </span>
      <span className="h-[1px] w-10 sm:w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
    </div>
  );
}

function PersonCard({ person, onSelect, isPatriarch }) {
  return (
    <button
      onClick={() => onSelect(person)}
      className="group relative flex w-[200px] sm:w-[220px] items-center gap-3 sm:gap-4 rounded-xl p-3 sm:px-5 sm:py-4 text-left transition hover:-translate-y-1 active:scale-95"
      style={{
        background: PARCHMENT_CARD,
        border: `1px solid ${LACQUER}`,
        boxShadow: `0 4px 10px rgba(43,27,18,0.2), inset 0 0 0 2px ${GOLD}`,
      }}
    >
      {isPatriarch && (
        <div className="absolute -right-2 -top-3 z-20">
          <SealMark size={28} />
        </div>
      )}

      <div
        className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full p-[3px]"
        style={{ background: `linear-gradient(135deg, ${GOLD}, ${LACQUER})` }}
      >
        <img
          src={person.avatar}
          alt={person.name}
          className="h-full w-full rounded-full border-2 object-cover"
          style={{ borderColor: PARCHMENT_CARD }}
        />
      </div>

      <div className="flex-grow overflow-hidden">
        <h3
          className="truncate font-bold leading-snug group-hover:opacity-80"
          style={{ color: INK, fontFamily: "'Noto Serif', serif", fontSize: "0.95rem" }}
        >
          {person.name}
        </h3>

        <p className="mt-0.5 text-[11px] sm:text-xs font-medium" style={{ color: "#7A6752" }}>
          {person.gender} · {person.birth}
          {person.death ? ` – ${person.death}` : ""}
          {!person.death && (
            <span style={{ color: "#2E7D32" }}> · Sống</span>
          )}
        </p>
      </div>
    </button>
  );
}

function Couple({ person, onSelect, isPatriarch }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center gap-2">
      <PersonCard person={person} onSelect={onSelect} isPatriarch={isPatriarch} />

      {person.spouse && (
        <>
          <div className="flex sm:flex-col items-center py-1 sm:py-0 px-1">
            <div className="hidden sm:block h-[2px] w-8 sm:w-10" style={{ background: GOLD }} />
            <div className="block sm:hidden h-4 w-[2px]" style={{ background: GOLD }} />
            <span
              className="-my-1.5 text-[1.2rem] sm:text-[1.5rem]"
              style={{ color: LACQUER, textShadow: `0 1px 0 ${GOLD}88` }}
            >
              ❦
            </span>
            <div className="hidden sm:block h-[2px] w-8 sm:w-10" style={{ background: GOLD }} />
            <div className="block sm:hidden h-4 w-[2px]" style={{ background: GOLD }} />
          </div>

          <PersonCard person={person.spouse} onSelect={onSelect} />
        </>
      )}
    </div>
  );
}

function Generation({ children, onSelect, level }) {
  if (!children || children.length === 0) {
    return null;
  }

  return (
    <div className="mt-14 sm:mt-20 flex flex-col items-center">
      <GenerationLabel level={level} />

      <div className="relative flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 pt-4 sm:pt-6">
        <div
          className="absolute -top-4 sm:-top-7 left-1/2 h-6 sm:h-10 w-[2px] -translate-x-1/2"
          style={{ background: GOLD }}
        />

        {children.length > 1 && (
          <div
            className="hidden sm:block absolute -top-7 left-[calc(50%-120px)] right-[calc(50%-120px)] h-[2px]"
            style={{ background: GOLD }}
          />
        )}

        {children.map((child) => (
          <div key={child.id} className="relative flex flex-col items-center">
            {children.length > 1 && (
              <div
                className="hidden sm:block absolute -top-7 h-10 w-[2px]"
                style={{ background: GOLD }}
              />
            )}

            <Couple person={child} onSelect={onSelect} />

            <Generation
              children={child.children}
              onSelect={onSelect}
              level={level + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FamilyTree() {
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const [zoom, setZoom] = React.useState(0.75);

  return (
    <div
      className="min-h-screen selection:bg-amber-200"
      style={{
        background: `radial-gradient(circle at 50% 0%, #FBF2DA 0%, ${PARCHMENT} 60%, #EADDB8 100%)`,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700;900&family=Noto+Sans:wght@400;500;600&display=swap');
      `}</style>

      {/* HEADER */}
      <header
        className="relative border-b-4 sticky top-0 z-30 shadow-md"
        style={{
          background: `linear-gradient(180deg, ${LACQUER} 0%, ${LACQUER_DARK} 100%)`,
          borderColor: GOLD,
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-base sm:text-lg font-black"
              style={{
                border: `2px solid ${GOLD}`,
                color: GOLD_SOFT,
                fontFamily: "'Noto Serif', serif",
              }}
            >
              阮
            </div>
            <div>
              <h1
                className="text-lg sm:text-2xl font-bold tracking-wide"
                style={{ color: GOLD_SOFT, fontFamily: "'Noto Serif', serif" }}
              >
                GIA PHẢ DÒNG HỌ VÕ
              </h1>
              <p className="text-xs sm:text-sm" style={{ color: "#E9D9AE" }}>
                Cội nguồn · Kết nối · Lưu giữ muôn đời
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.1, 1.2))}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full font-bold transition hover:opacity-80 active:scale-90"
              style={{ background: GOLD, color: LACQUER_DARK }}
              title="Phóng to"
            >
              +
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.1, 0.4))}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full font-bold transition hover:opacity-80 active:scale-90"
              style={{ background: GOLD, color: LACQUER_DARK }}
              title="Thu nhỏ"
            >
              −
            </button>
            <button
              onClick={() => setZoom(0.75)}
              className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition hover:opacity-80"
              style={{
                border: `1px solid ${GOLD}`,
                color: GOLD_SOFT,
              }}
            >
              Đặt lại
            </button>
          </div>
        </div>
        <FretBorder color={GOLD_SOFT} />
      </header>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 py-6 sm:py-12">
        <div className="mb-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: LACQUER_DARK, fontFamily: "'Noto Serif', serif" }}
          >
            Cây Gia Phả
          </h2>
          <p className="mt-1 text-xs sm:text-sm px-2" style={{ color: "#8A6F49" }}>
            Sơ đồ các thế hệ trong gia đình — chạm vào từng thành viên để xem chi tiết
          </p>
          <LotusDivider />
        </div>

        {/* TREE AREA WITH TOUCH SCROLL */}
        <div
          className="relative rounded-2xl sm:rounded-3xl p-[3px] sm:p-[4px]"
          style={{
            background: `linear-gradient(165deg, ${LACQUER_DARK}, ${GOLD}, ${LACQUER})`,
            boxShadow: "0 10px 25px rgba(43,27,18,0.2)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] p-4 sm:p-12"
            style={{
              backgroundColor: PARCHMENT,
              backgroundImage: motifPattern(`${GOLD}33`, `${LACQUER}26`),
              backgroundSize: "84px 84px",
              backgroundRepeat: "repeat",
              boxShadow: `inset 0 0 0 4px ${PARCHMENT}, inset 0 0 80px rgba(201,162,39,0.1)`,
            }}
          >
            <ElegantCorner position="top-left" />
            <ElegantCorner position="top-right" />
            <ElegantCorner position="bottom-left" />
            <ElegantCorner position="bottom-right" />

            <div className="overflow-x-auto overflow-y-hidden pb-4">
              <div
                className="flex min-w-max justify-center pb-16 pt-6 transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
              >
                <div className="flex flex-col items-center">
                  <GenerationLabel level={1} />
                  <div className="relative">
                    <Couple person={familyData} onSelect={setSelectedPerson} isPatriarch />
                  </div>

                  <Generation
                    children={familyData.children}
                    onSelect={setSelectedPerson}
                    level={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPerson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-sm rounded-2xl p-[3px] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${LACQUER}, ${GOLD})`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[13px] p-6 sm:p-7"
              style={{
                background: `linear-gradient(180deg, ${INK} 0%, #1B110B 100%)`,
                border: `1px solid ${GOLD}`,
                boxShadow: `inset 0 0 0 4px ${INK}`,
              }}
            >
              <div className="absolute inset-x-0 top-0">
                <FretBorder color={GOLD} />
              </div>

              <div className="flex flex-col items-center pt-2 text-center">
                <div
                  className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full p-[3px]"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${LACQUER})` }}
                >
                  <img
                    src={selectedPerson.avatar}
                    alt={selectedPerson.name}
                    className="h-full w-full rounded-full border-2 object-cover"
                    style={{ borderColor: INK }}
                  />
                </div>

                <h2
                  className="mt-4 text-lg sm:text-xl font-bold tracking-wide"
                  style={{ color: GOLD_SOFT, fontFamily: "'Noto Serif', serif" }}
                >
                  {selectedPerson.name}
                </h2>
                <p className="text-xs sm:text-sm" style={{ color: "#C8B592" }}>
                  {selectedPerson.gender}
                </p>
              </div>

              <div
                className="mt-5 sm:mt-6 space-y-3 rounded-xl p-3 sm:p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${GOLD}55` }}
              >
                <div className="flex justify-between text-xs sm:text-sm">
                  <span style={{ color: "#C8B592" }}>Năm sinh</span>
                  <span className="font-medium" style={{ color: GOLD_SOFT }}>
                    {selectedPerson.birth}
                  </span>
                </div>
                <div
                  className="h-[1px] w-full"
                  style={{ background: `${GOLD}33` }}
                />
                <div className="flex justify-between text-xs sm:text-sm">
                  <span style={{ color: "#C8B592" }}>Năm mất</span>
                  <span className="font-medium" style={{ color: GOLD_SOFT }}>
                    {selectedPerson.death || "Còn sống"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPerson(null)}
                className="mt-5 sm:mt-6 w-full rounded-lg py-2.5 sm:py-3 text-sm font-semibold transition hover:opacity-90 active:scale-95"
                style={{ background: GOLD, color: INK }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}