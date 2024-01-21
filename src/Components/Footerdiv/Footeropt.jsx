
const Options = ['About us', 'Feature', 'News', 'FAQ']


const Footeropt = () => {
    return (
        <div>
            <div className="grid gap-3">
                {
                    Options.map(item => <li className="text-white opacity-[.7] hover:opacity-[1]" key={item}>{item}</li>)
                }

            </div>
        </div>
    );
};

export default Footeropt;


