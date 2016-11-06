module SharedValidations
  # validates a string contains only letters, digits and whitespace
  def appropriate_characters_only?(str)
    !!str && str[/[a-zA-Z\d\s]*/] === str
  end
end
