import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [ selectShop ],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [ selectCollections ],
    collections => Object.keys(collections).map(collectionKey => collections[collectionKey])
)

export const selectCollection = memoize(collectionId => (
    createSelector(
        [ selectCollections ],
        collections => collections[collectionId]
    )
));
