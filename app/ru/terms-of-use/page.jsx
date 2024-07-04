
const Page = () => {
    return (
        <div style={{overflowY: 'hidden', height: '100%', width: '100%'}}>
            <iframe src='/documents/ruTermsOfUse.pdf'
                    width='100%'
                    height='100%'
                    frameBorder='0'/>
        </div>
    );
};

export default Page;