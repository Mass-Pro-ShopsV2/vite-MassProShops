'use strict';

import db from '../server/db//db.js';
import { User, Product } from '../server/db/index.js';

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log('db synced!');

    // Creating Users
    const users = await Promise.all([
        User.create({
            username: 'cody',
            password: '123',
            name: 'Cody',
            address: '123 main',
        }),
        User.create({
            username: 'murphy',
            password: '123',
            name: 'Cody',
            address: '123 main',
        }),
        User.create({
            username: 'admin',
            password: '123',
            name: 'admin',
            address: '123 main',
            isAdmin:true,
        }),
    ]);

    const products = await Promise.all([
        //LAPTOP CATEGORY------
        Product.create({
            name: 'Surface Pro 4',
            price: 69.99,
            description: 'Surface Pro 4',
            category: 'laptop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Microsoft_Surface_Pro_4.png',
            rating: 4.5,
            quantity: 20,
        }),
        Product.create({
            name: 'Apple IMagineWorking 4',
            price: 69.99,
            description: 'Great for starters, terrible in general',
            category: 'laptop',
            image: 'https://assets-prd.ignimgs.com/2023/04/24/applemacbookm2pro-1682358090413.jpg',
            rating: 4.1,
            quantity: 17,
        }),
        Product.create({
            name: "Lenovo ThinkPad",
            price: 1099.99,
            description: "Get thinkin with the ThinkPad",
            category: "laptop",
            image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA/lenovo-laptop-thinkpad-t490-hero-1126.png",
            rating: 4.4,
            quantity: 12,
        }),

        Product.create({
            name: 'HP Pavilion 15',
            price: 799.99,
            description: 'Just think of this as your work laptop that you dont mind spilling coffee on',
            category: 'laptop',
            image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08114715.png?imwidth=270&imdensity=1',
            rating: 4.3,
            quantity: 14,
        }),

        Product.create({
            name: 'Lenovo Yoga C940',
            price: 1199.99,
            description: 'Primarily used for Yoga sessions',
            category: 'laptop',
            image: 'https://static.lenovo.com/na/subseries/hero/lenovo-laptop-yoga-c940-hero-15-3yr-support.png',
            rating: 4.6,
            quantity: 11,
        }),

        Product.create({
            name: 'MSI GS66 Stealth',
            price: 1499.99,
            description: 'Type your code in stealth mode using the GS66 Stealth',
            category: 'laptop',
            image: 'https://storage-asset.msi.com/global/picture/image/feature/nb/gs/GS66-TigerLake/gs66-gpu-ray-new.png',
            rating: 4.5,
            quantity: 16,
        }),




        //DESKTOP CATEGORY-------
        Product.create({
            name: "MacBook Pro",
            price: 1499.99,
            description: "Still runs like a beauty",
            category: "desktop",
            image: "https://i.pinimg.com/originals/a4/62/08/a46208b6977149f230e2d86d8a9c3470.png",
            rating: 4.7,
            quantity: 3,
        }),
        Product.create({
            name: "Dell XPS 13",
            price: 1299.99,
            description: "Ever wanted a jet engine?",
            category: "desktop",
            image: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/new-category-page-accessories-left-u3419w-km636-800x620.png",
            rating: 4.3,
            quantity: 21,
        }),
        Product.create({
            name: "HP Pavilion 27-inch All-in-One",
            price: 999.99,
            description: "Powerful and stylish all-in-one desktop",
            category: "desktop",
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08058275.png?imwidth=270&imdensity=1",
            rating: 4.7,
            quantity: 15,
        }),
        Product.create({
            name: "Apple iMac 27-inch",
            price: 1899.99,
            description: "Sleek and high-performance desktop computer",
            category: "desktop",
            image: "https://cdn0.vox-cdn.com/hermano/verge/product/image/9376/DSC01539.jpg",
            rating: 4.8,
            quantity: 10,
        }),
        Product.create({
            name: "Lenovo ThinkCentre M910q",
            price: 899.99,
            description: "Compact and powerful mini desktop",
            category: "desktop",
            image: "https://f.shgcdn.com/8fec1a62-5987-431f-af17-44fd5817b6f6/",
            rating: 4.4,
            quantity: 18,
        }),
        Product.create({
            name: "Asus ROG Strix G15CK",
            price: 1499.99,
            description: "Gaming powerhouse with high-performance specs",
            category: "desktop",
            image: "https://dlcdnwebimgs.asus.com/gain/AC7C6D81-C5C1-4C2D-955F-3F0C6DED7880",
            rating: 4.9,
            quantity: 12,
        }),
        Product.create({
            name: "Dell Inspiron 27 7000",
            price: 1199.99,
            description: "Stylish all-in-one desktop with touchscreen display",
            category: "desktop",
            image: "https://www.cnet.com/a/img/resize/0a74953bac859b8015cc354ad5f57bf968562488/hub/2019/05/27/966352e5-1ff9-4f4e-8262-fd694764666a/10-dell-inspiron-27-7000-aio.jpg?auto=webp&fit=crop&height=675&width=1200",
            rating: 4.6,
            quantity: 16,
        }),
        Product.create({
            name: "HP EliteDesk 800 G6",
            price: 1299.99,
            description: "High-performance business desktop with advanced security features",
            category: "desktop",
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06906675.png",
            rating: 4.5,
            quantity: 14,
        }),
        Product.create({
            name: "MSI Trident X Plus",
            price: 1799.99,
            description: "Compact gaming desktop with powerful graphics",
            category: "desktop",
            image: "https://asset.msi.com/resize/image/global/product/product_6_20190711103706_5d26a0d28bc56.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            rating: 4.7,
            quantity: 9,
        }),



        //projector/tv stuff-----------
        Product.create({
            name: 'GPX Mini Projector 4',
            price: 89.99,
            description: 'Great for travelling or your small room.',
            category: 'projector',
            image: 'https://www.kroger.com/product/images/large/front/0004732330005',
            rating: 4.1,
            quantity: 18,
        }),
        Product.create({
            name: 'Apple IMagineWorking 6',
            price: 69.99,
            description: 'Its Apple. You will buy it.',
            category: 'projector',
            image: 'https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: "Sony 4K Smart TV",
            price: 1499.99,
            description: "So smart that it hates apple products.",
            category: "projector",
            image: "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision%2FBRAVIA+LCD+HDTV%2FFY+22%2FX85K%2FProduct+shots%2FX85K_43_50%2FeComm%2F1--X85K-50-Sony-FRNT.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uJTJGQlJBVklBK0xDRCtIRFRWJTJGRlkrMjIlMkZYODVLJTJGUHJvZHVjdCtzaG90cyUyRlg4NUtfNDNfNTAlMkZlQ29tbSUyRjEtLVg4NUstNTAtU29ueS1GUk5ULnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=FRkIcXAqyhlfrUBOv2~Nc5L51vVM2Orr6pqMPIK9GXRazjJe0hTNC0dGV4fb8O~qbzGdjLRzBWXrjrheNjqSDSXGW83k-PkKY2Kx-VHByl~a6zoLLSNeXzWbMoR2a-Qq-wE70SA-gFJ6XJ8kGb5xhN9ElpTI6pMczf90X~ERKTYnHiZ3lMV5KdYWaiWzWCGdhSk3tSmEZntHkQumbHzRsWju21XjkF5FnMqL3nYM7ztBOARYuCv9EmGsZCZs5elxGIW4GB~6g3dz4cemvaDPBsmJW-ZZNp9FyIcEaW-n6ngekK4DRnWk3DNof39c4DFSbt2T7a-Z4vfRCvdu0AYd4w__&Key-Pair-Id=K37BLT9C6HMMJ0",
            rating: 4.6,
            quantity: 3,
        }),

        Product.create({
            name: "LG Ultra Short Throw Projector",
            price: 1299.99,
            description: "Unlock colors you didnt know that existed.",
            category: "projector",
            image: "https://www.projectorcentral.com/images/articles/LG-HU85LA-UST-projector-lifestyle2-800.jpg",
            rating: 4.4,
            quantity: 25,
        }),

        Product.create({
            name: "Epson Home Cinema Projector",
            price: 899.99,
            description: "Classic for those who have a home theatre.",
            category: "projector",
            image: "https://mediaserver.goepson.com/ImConvServlet/imconv/22c2d0daa8929f4fc409f96049906c4786534921/515Wx515H?use=productpictures&hybrisId=B2C&assetDescr=PL109W_V11H861020_384x286",
            rating: 4.2,
            quantity: 40,
        }),

        Product.create({
            name: "Samsung QLED TV",
            price: 1999.99,
            description: "Usually the first one you see at Costco.",
            category: "projector",
            image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn700bkxxl/gallery/in-qled-qn700b-qa65qn700bkxxl-531282729?$720_576_PNG$",
            rating: 4.7,
            quantity: 11,
        }),
        Product.create({
            name: "Epson Home Cinema 2150",
            price: 799.99,
            description: "Full HD wireless projector for home entertainment",
            category: "projector",
            image: "https://www.nutrirific.com/wp-content/uploads/2019/08/81kcpdvNWzL._SL1500_.jpg",
            rating: 4.5,
            quantity: 12,
        }),
        Product.create({
            name: "Optoma HD146X",
            price: 649.99,
            description: "High-performance 1080p home theater projector",
            category: "projector",
            image: "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/sp_16_9_864w/2023/04/24/node_655628/54741085/public/2023/04/24/B9734105418Z.1_20230424141519_000%2BGF8ML738S.1-0.jpg?itok=avLaPuDd1682338648",
            rating: 4.3,
            quantity: 15,
        }),
        Product.create({
            name: "BenQ TK800M",
            price: 999.99,
            description: "4K HDR home theater projector with vivid colors",
            category: "projector",
            image: "https://www.rollingstone.com/wp-content/uploads/2020/03/7A5D9E5A-8772-4E81-86EC-6C79765B97AD.jpeg",
            rating: 4.7,
            quantity: 10,
        }),
        Product.create({
            name: "LG CineBeam PH550",
            price: 449.99,
            description: "Portable LED projector with built-in battery",
            category: "projector",
            image: "https://www.lg.com/ca_en/images/TV/features/PH550-feature-2.5%20Hours-1600x800.jpg",
            rating: 4.2,
            quantity: 18,
        }),




        //AUDIO STUFF ---- 
        Product.create({
            name: 'Headcandy Headphones',
            price: 24.99,
            description: 'Better than Skullcandy headphones.',
            category: 'audio',
            image: 'https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/0f6524bbd793916b5c3df4826d81786a07a4e607145571c6875c9e4f054da39a.jpg',
            rating: 3.5,
            quantity: 12,
        }),
        Product.create({
            name: 'Fiji Apple Headphones',
            price: 469.99,
            description: 'High price for average sound quality.',
            category: 'audio',
            image: 'https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1200x1200.v1623391765.jpg',
            rating: 3.1,
            quantity: 15,
        }),
        Product.create({
            name: 'Ol Reliable',
            price: 4.99,
            description: 'They will last you a few weeks but theyre cost effective.',
            category: 'audio',
            image: 'https://cdn.shopify.com/s/files/1/0277/8955/7897/products/image_94008881-3503-4ea6-8ab6-61539cf72820_1024x1024.png?v=1668879949',
            rating: 5.0,
            quantity: 1,
        }),
        Product.create({
            name: 'Beats by Azgard',
            price: 19.99,
            description: 'Gives you godlike powers.',
            category: 'audio',
            image: 'https://cdn.shopify.com/s/files/1/0112/1203/0016/products/k9catears_5.png?v=1644802415',
            rating: 2.8,
            quantity: 8,
        }),
        Product.create({
            name: 'Phony Headphones',
            price: 199.99,
            description: 'Best bang for your buck.',
            category: 'audio',
            image: 'https://media.gq.com/photos/62b37d5a29911a9a17ab0abc/16:9/w_2560%2Cc_limit/HP-01.jpg',
            rating: 4.9,
            quantity: 4,
        }),
        Product.create({
            name: 'La Audiphoneua',
            price: 999.99,
            description: 'This is what luxury sounds like.',
            category: 'audio',
            image: 'https://cdn.vox-cdn.com/thumbor/XFJouxC9AhJVfwIaz7VFGqYBswU=/0x0:1600x1255/1000x1429/filters:focal(800x627:801x628)/cdn.vox-cdn.com/uploads/chorus_asset/file/13070145/sony-original-walkman-tps-l2.0.1406747932.jpg',
            rating: 1.1,
            quantity: 10,
        }),
        Product.create({
            name: "Sony WH-1000XM4",
            price: 349.99,
            description: "Airpods but they actually work",
            category: "audio",
            image: "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2F_default_upload_bucket%2F01_WF-1000XM4_B_KeyVisual-Mid_1.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZfZGVmYXVsdF91cGxvYWRfYnVja2V0JTJGMDFfV0YtMTAwMFhNNF9CX0tleVZpc3VhbC1NaWRfMS5wbmcucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ1NzYyMDAwfX19XX0_&Signature=CRIWPdC7Xec2chZnQQb4yYIyHG4oTtxku4qeS4JfgLYidySRXBP9sQ9sPmbeIzDr9yelsmp~cYXJUP8peaWkUHcW1xWXOd13z7C8WzwCufKw9fjrJc6EGPEftFow1wcO533ZgGm3NYPk~3APwo6Cms1v~7732-ouqlfOZGogDjPyjZegEVrZr98MI7po7dnJa8ljJYtbhkK~2gGhIQDftOz21pdFcEymwhoOODXA29CNMD5GGW88sAOmimvvkeuwVVzbIvCgkxnM7-HUgAlinfTRcb2EYarQ-~odypgFr0Tbntd4c05J6FxXJOlCrjuM-Sco~C0DW9CRIESvVsPd8Q__&Key-Pair-Id=K37BLT9C6HMMJ0",
            rating: 4.8,
            quantity: 25,
        }),
        Product.create({
            name: "Bose QuietComfort 35 II",
            price: 299.99,
            description: "Premium wireless headphones with world-class noise cancellation",
            category: "audio",
            image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/images/qc35_ii_product_page_buy_panel_1x1.psd/jcr:content/renditions/cq5dam.web.320.320.png",
            rating: 4.7,
            quantity: 30,
        }),
        Product.create({
            name: "60W Bluetooth Speaker",
            price: 499.99,
            description: "Sing to your hearts content",
            category: "audio",
            image: "https://m.media-amazon.com/images/I/812f0zUstJL._AC_SL1500_.jpg",
            rating: 4.6,
            quantity: 15,
        }),
        Product.create({
            name: "Jabra Elite 85h",
            price: 249.99,
            description: "The better jbl",
            category: "audio",
            image: "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw7087b641/images/marshall/speakers/stanmore-ii-bt/black/high-res/pos-marshall-stanmore-ii-bt-black-01.png",
            rating: 4.5,
            quantity: 20,
        }),



        //can delete this later---
        Product.create({
            name: 'Hope',
            price: 20.25,
            description: 'Our only ray of hope for when AI takes over',
            category: 'easter egg',
            image: 'https://www.hostesscakes.com/wp-content/uploads/2020/03/HST_TWINK_Hero_Original_Cut.png',
            rating: 1.5,
            quantity: 1
        })
    ]);

    console.log(`seeded ${users.length} users & ${products.length} products`);
    console.log(`seeded successfully`);
    return {
        users: {
            cody: users[0],
            murphy: users[1],
        },
    };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log('seeding...');
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

// If this module is the entry point, run the seed function
if (import.meta.url === new URL(import.meta.url)) {
    runSeed();
}

// Export the seed function for testing purposes (see `./seed.spec.js`)
export default seed;
