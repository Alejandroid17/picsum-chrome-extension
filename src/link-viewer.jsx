const LinkViewer = ({link}) => {
    return (
        <pre className="overflow-auto p-2 bg-gray-100 rounded-md">
            <code className="break-words text-red">
                <a className="no-underline text-blue-500 text-sm" target="_blank" href={link}>{link}</a>
            </code>
        </pre>
    );
}

export default LinkViewer;