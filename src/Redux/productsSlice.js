import { createSlice } from "@reduxjs/toolkit";

const productsInfo = [
    {
        "id": 2,
        "title": "هندزفری بلوتوثی",
        "price": 139000,
        "count": 90,
        "img": "/img/head.png\r\n",
        "popularity": 90,
        "sale": 18980000,
        "colors": 4,
        "productDesc": "هندزفری بلوتوثی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n",
        "url": "headset",
        "categoryID": 1
    },
    {
        "id": 3,
        "title": "عینک آفتابی",
        "price": 290000,
        "count": 129,
        "img": "/img/glasses.jpg",
        "popularity": 82,
        "sale": 9100000,
        "colors": 1,
        "productDesc": "این عینک دارای لنز های استاندارد UV400 و پلاریزه میباشد. استفاده از آن به دلیل خاصیت پلاریزه لنز ها برای رانندگی و جاهایی که انعکاس نور از روی سطح افقی زیاد است بسیار مناسب است. جنس بدنه عینک کائوچویی میباشد.لنز های عینک آنتی رفلکس است.",
        "url": "POLARIZED-glasses",
        "categoryID": 3
    },
    {
        "id": 5,
        "title": "تلویزیون ال ای دی",
        "price": 32000000,
        "count": 35,
        "img": "/img/tv.jpg",
        "popularity": 84,
        "sale": 321400000,
        "colors": 3,
        "productDesc": "تلویزیون ال ای دی جی پلاس مدلGTV-50PU746N دارای سایز 50 اینچ خواهد بود. پنل این تلویزیون IPS بوده و گريد انرژي آن A است. نوع پایه این تلویزیون رومیزی بوده و نوع صفحه آن تخت است. کیفیت تصویر در این تلویزیون 4K بوده ورزولوشن آن 3840 × 2160 است. ابعاد تلویزیون بدون پایه 91x642x91x1111 میلی‌متر و ابعاد تلویزیون با پایه 699x212x1111 میلی‌متر خواهد بود. در این تلویزیون تعداد درگاه های HDMI سه عدد و تعداد درگاه‌های USB دو عدد است.",
        "url": "GTV-50PU746N",
        "categoryID": 1
    },
    {
        "id": 6,
        "title": "ساعت هوشمند",
        "price": 78000,
        "count": 900,
        "img": "/img/watch.jpg",
        "popularity": 76,
        "sale": 17000000,
        "colors": 1,
        "productDesc": "بدون شک ساعت‌های هوشمند اپل توانسته‌اند تا به امروز عملکرد بهتری به نسبت شرکت‌های دیگر داشته باشند. اما این بار اپل در کنار رونمایی از ساعت‌های هوشمند جدید خود، اپل واچ Ultra را معرفی کرد که مشخصات قدرتمند و قابلیت‌های بسیار جذاب و کاربردی را با خود به‌همراه داشته است. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 1.92 اینچ و رزولوشن 410×520 پیکسل از نوع Retina LTPO OLED مجهز شده که بدون شک کیفیت تصاویر فوق العاده‌ای را ارائه می‌کند. از طرفی باید بدانید که این صفحه‌نمایش جذاب و دوست‌ داشتنی، توانایی ارائه حداکثر روشنایی 2000 نیت (شمع در متر مربع) را دارد. چنین میزان روشنایی را در هیچ ساعت هوشمندی پیش از این ندیده بودیم و همین روشنایی بسیار بالا سبب شده تا در شرایط نوری متنوع و زیر تابش مستقیم نور خورشید هم، وضوح تصویر بسیار خوبی را شاهد باشید. قابلیت‌های بسیار جذاب ECG که تمام فعالیت‌های بدنی شما را لحظه به لحظه بررسی می‌کند و در صورت مشاهده هرگونه فعالیت‌ بدنی که منجر به آسیب رسیدن به شما شود، به سرعت هشدار می‌دهد. قابلیت‌های Fall Detection و Crash Detectionfootnote این ساعت هم اگر برای مثال زمین بخورید و یا تصادفی داشته باشید، به سرعت متوجه می‌شود و در نهایت اقدامات لازم برای اطمینان از سلامت شما را انجام می‌دهد. باتری با میزان ظرفیت 542 میلی‌آمپر‌ساعت هم به ازای هر بار شارژ صد درصدی، توانایی ارائه طول عمر مفید (زمان آماده به‌کار) 36 ساعت را به ازای هر بار شارژ صد درصدی دارد.",
        "url": "Retina -watch",
        "categoryID": 3
    },
    {
        "id": 7,
        "title": "کوله پشتی",
        "price": 56000,
        "count": 313,
        "img": "/img/backpack.jpg",
        "popularity": 83,
        "sale": 19782000,
        "colors": 1,
        "productDesc": "کوله پشتی گودیکا مدل 5082 دارای رنگبندی متنوع مناسب استفاده انواع سنین و در هر موقعیتی میباشد. این کوله پشتی دارای 3 محفظه بیرونی و 3 محفظه کوچک داخلی است.این کوله برای دانشگاه و استفاده روزمره مناسب است شما میتوانید برای مدرسه ، دانشگاه ، سرکار ، پیاده روی یا هر موقعیت دیگری از این کوله پشتی زیبا استفاده کنید. یکی از مهمترین ویژگی های کیف های گودیکا سبک و جادار بودن آنهاست که شما را از بدوش کشیدن کیف های سنگین وزن خلاص خواهد کرد",
        "url": "godia-backpack",
        "categoryID": 3
    }
]

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: productsInfo
    },
    reducers: {
        addNewProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const newProducts = state.products.map(item => {
                if(item.id === action.payload.id){
                    return {...item, ...action.payload };
                }else {
                    return item;
                }
            });

            state.products = newProducts;
        }
    }
})

export default productSlice.reducer;
export const { addNewProducts, deleteProduct, updateProduct } = productSlice.actions;