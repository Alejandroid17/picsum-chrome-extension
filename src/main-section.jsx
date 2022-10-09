import Button from "./button";
import useRandomPhoto from "./hooks/useRandomPhoto";
import LinkViewer from "./link-viewer";

const MainSection = () => {
  const { photoURL, refresh } = useRandomPhoto();

  return (
    <section class="bg-white dark:bg-gray-900 px-3">
      <div class="mx-auto">
        <div class="flex mt-4 justify-center">
          {photoURL ? (
            <img
              class="mt-4 w-2/3 rounded-lg"
              src={photoURL}
              alt="Picsum photo"
            />
          ) : null}
        </div>
        <div class="mx-3 mt-5">
          <LinkViewer link={photoURL} />
        </div>
        <div class="mx-6 mt-5 mb-2">
          <Button label="Get random photo" onClick={refresh} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
