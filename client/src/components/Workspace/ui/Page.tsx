import CoverImage from "./CoverImage"
import Editor from "./Editor"
import PageTitle from "./PageTitle"

const Page = () => {
  return (
		<div className="flex flex-col justify-center items-center">
			<CoverImage></CoverImage>
			<PageTitle></PageTitle>
			<div className="w-[90%] ">
				<Editor />
			</div>
		</div>
	);
}

export default Page
