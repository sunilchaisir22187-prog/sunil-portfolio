import Image from 'next/image';
import imageAssets from '@/lib/imageAssets.json';

type AssetName = keyof typeof imageAssets;
export function hasAsset(name: string): name is AssetName { return Object.hasOwn(imageAssets, name); }

/** Static responsive sources preserve Next Image semantics without an image server. */
export default function AssetImage({name,alt,className,priority=false,sizes='(max-width: 700px) 90vw, 45vw'}:{name:string;alt:string;className?:string;priority?:boolean;sizes?:string}){
 if(!hasAsset(name)) return null;
 const asset=imageAssets[name];
 const srcSet=asset.variants.map(variant=>`${variant.src} ${variant.width}w`).join(', ');
 return <picture className="assetPicture"><source type="image/webp" srcSet={srcSet} sizes={sizes}/><Image src={`/images/${name}`} alt={alt} width={asset.width} height={asset.height} className={className} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined} sizes={sizes}/></picture>;
}
