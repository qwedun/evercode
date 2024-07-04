
const Page = () => {
    return (
        <div style={{position: 'absolute', top:0, overflowY: 'hidden', height: '100%', width: '100%', zIndex: 1000}}>
            <iframe src='/documents/ruPrivacy.pdf'
                    width='100%'
                    height='100%'
                    frameBorder='0'/>
        </div>
    );
};

export default Page;