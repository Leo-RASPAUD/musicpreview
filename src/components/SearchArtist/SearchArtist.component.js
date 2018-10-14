import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import arrayUtils from 'utils/arrayUtils';
import RenderSuggestion from './RenderSuggestion.component';
import RenderInput from './RenderInput.component';
import styles from './styles';

const { removeDuplicates } = arrayUtils;

let timer = null;

const handleChangeArtistTimeout = ({ artist, handleChangeArtist, searchArtist }) => {
    clearTimeout(timer);
    handleChangeArtist({ artist: { artistName: artist } });

    timer = setTimeout(() => {
        searchArtist({ artist });
    }, 500);
};

const SearchArtist = props => {
    const { classes, artists, handleChangeArtist, searchArtist, artist, getArtistSongs } = props;
    return (
        <Downshift
            onInputValueChange={inputValue =>
                handleChangeArtistTimeout({
                    artists,
                    artist: inputValue,
                    handleChangeArtist,
                    searchArtist,
                })
            }
            itemToString={item => item && item.artistName}
            onChange={item => {
                handleChangeArtist({ artist: item });
                getArtistSongs({ id: item.artistId });
            }}
            selectedItem={artist}
            selectedItemChanged={(prevItem, item) => prevItem.artistName !== item.artistName}
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                highlightedIndex,
                isOpen,
                selectedItem,
            }) => (
                <div className={classes.autoCompleteContainer}>
                    <RenderInput
                        fullWidth
                        InputProps={getInputProps({ placeholder: 'Search artist' })}
                    />
                    <div {...getMenuProps()}>
                        {isOpen ? (
                            <Paper className={classes.autoCompletePaper} square>
                                {removeDuplicates(artists)
                                    .slice(0, 10)
                                    .map((suggestion, index) => (
                                        <RenderSuggestion
                                            suggestion={suggestion}
                                            index={index}
                                            itemProps={getItemProps({ item: suggestion })}
                                            highlightedIndex={highlightedIndex || 0}
                                            selectedItem={selectedItem}
                                            key={suggestion.artistId}
                                        />
                                    ))}
                            </Paper>
                        ) : null}
                    </div>
                </div>
            )}
        </Downshift>
    );
};

SearchArtist.propTypes = {
    classes: PropTypes.object.isRequired,
    artists: PropTypes.array.isRequired,
    artist: PropTypes.object.isRequired,
    handleChangeArtist: PropTypes.func.isRequired,
    searchArtist: PropTypes.func.isRequired,
    getArtistSongs: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchArtist);
