package com.ipilyon.backend.mapper;

import java.util.List;

import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.model.Commentaire;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper
public interface CommentaireMapper {

    @Named("toDto")
    @Mapping(target = "cours.categorie.cours", ignore = true)
    @Mapping(target = "cours.progressions", ignore = true)
    @Mapping(target = "user.progressions", ignore = true)
    @Mapping(target = "cours.commentaires", ignore = true)
    CommentaireDto map(Commentaire commentaire);

    Commentaire map(CommentaireDto commentaireDto);

    @IterableMapping(qualifiedByName = "toDto")
    List<CommentaireDto> map(List<Commentaire> commentaire);
}
