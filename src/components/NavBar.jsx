import OrangeButton from "./OrangeButton.jsx"

function NavBar() {
    return (
        <nav className="flex justify-between text-white">
            <div>
                <img src="/GPT-3.png" alt="Vite logo" />
            </div>

            <ul className="flex gap-8">
                <li>Home</li>
                <li>what is chatgpt</li>
                <li>open ai</li>
                <li>case studies</li>
                <li>Library</li>
            </ul>

            <div className="flex gap-4">
                <button>Sign in</button>
              <OrangeButton>Sign up</OrangeButton>
            </div>
          
        </nav>
    )
}

export default NavBar