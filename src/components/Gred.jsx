const imgNoise = 'http://localhost:3845/assets/66bff7bdfbbef7edaefa4a7570fbcde664049cbd.png'

export default function Gred() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden pointer-events-none">
      {/* Noise texture — top-left, soft-light blend */}
      <div
        className="absolute top-0 left-0 w-[612px] h-[370px] mix-blend-soft-light opacity-50"
        style={{
          backgroundImage: `url('${imgNoise}')`,
          backgroundSize: '612px 370px',
          backgroundPosition: 'top left',
        }}
      />

      {/* Orange-to-blue radial blob — left side */}
      <div
        className="absolute rounded-full opacity-10"
        style={{
          width: '1003px',
          height: '1003px',
          top: '227px',
          left: '-196px',
          background: 'linear-gradient(to bottom, #f93f08, #1143f8)',
          filter: 'blur(110px)',
        }}
      />

      {/* Blue radial blob — top right */}
      <div
        className="absolute rounded-full opacity-10"
        style={{
          width: '900px',
          height: '900px',
          top: '-302px',
          left: '807px',
          background: 'linear-gradient(to bottom, #34b8f9, #1143f8)',
          filter: 'blur(92px)',
        }}
      />
    </div>
  )
}
