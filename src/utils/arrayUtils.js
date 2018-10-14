const removeDuplicates = items =>
    items.filter(
        (thing, index, self) => index === self.findIndex(t => t.artistId === thing.artistId),
    );

export default {
    removeDuplicates,
};
