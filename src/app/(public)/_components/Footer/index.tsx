
export function Footer(){
  return(
    <footer className="flex items-center justify-center py-3 text-gray-500 text-sm sm:text-xl">
      <p>
        Todos os direitos reservados {new Date().getFullYear()} - <span
          className="hover:text-black hover:-tracking-tighter transition-all duration-300">
          @DevKauãSouza
        </span>
      </p>
    </footer>
  )
}