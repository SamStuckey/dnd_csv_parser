module SharedValidations
  def appropriate_characters_only?(str)
    !!str && str[/[a-zA-Z\d]*/] === str
  end
end
