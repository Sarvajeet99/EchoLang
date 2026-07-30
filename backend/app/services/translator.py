from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

MODEL_NAME = "facebook/nllb-200-distilled-600M"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)


def translate(text, source="eng_Latn", target="spa_Latn"):
    tokenizer.src_lang = source

    inputs = tokenizer(text, return_tensors="pt")

    translated_tokens = model.generate(
        **inputs,
        forced_bos_token_id=tokenizer.convert_tokens_to_ids(target),
        max_new_tokens=256,
    )

    return tokenizer.batch_decode(
        translated_tokens,
        skip_special_tokens=True
    )[0]