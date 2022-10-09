import PicsumIcon from "./icons/picsum-icon";

const Header = () => {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-5 py-4 lg:px-6 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://picsum.photos/" target="_blank" class="flex items-center">
            <span class="self-center whitespace-nowrap mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group">
              Picsum Chrome extension
            </span>
          </a>
        </div>
      </nav>
      <div class="mx-3 border-b"></div>
    </header>
  );
};

export default Header;
