export default function Layout({children}) {
  return (
    <div className="py-16 flex justify-center items-center">
    <section className="w-[740px] h-[500px] bg-[#1E2A47]  rounded-lg">
        {children}
    </section>
    </div>
  )
}
