interface LoaderProps {
   isLoading: boolean;
}
const Loader = (props: LoaderProps):JSX.Element | null => {
   const { isLoading } = props;
   return isLoading ? <div className="loader"></div> : null;
}

export default Loader;